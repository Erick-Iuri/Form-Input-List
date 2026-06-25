// app/api/pedidos/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const caminhoDoBanco = path.join(process.cwd(), 'dados', 'pedidos.json');

function lerBancoComSeguranca() {
  const pasta = path.dirname(caminhoDoBanco);
  if (!fs.existsSync(pasta)) fs.mkdirSync(pasta, { recursive: true });
  if (!fs.existsSync(caminhoDoBanco)) fs.writeFileSync(caminhoDoBanco, '[]');

  const conteudo = fs.readFileSync(caminhoDoBanco, 'utf-8').trim();
  
  if (conteudo === "") {
    fs.writeFileSync(caminhoDoBanco, '[]');
    return [];
  }

  return JSON.parse(conteudo);
}

export async function GET() {
  try {
    const dados = lerBancoComSeguranca();
    return new NextResponse(JSON.stringify(dados), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Content-Type': 'application/json',
      },
    });
  } catch (erro) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const novoPedido = await request.json();
    const listaAtual = lerBancoComSeguranca();
    listaAtual.push(novoPedido);
    fs.writeFileSync(caminhoDoBanco, JSON.stringify(listaAtual, null, 2));

    return NextResponse.json({ mensagem: "Salvo com sucesso!" });
  } catch (erro) {
    return NextResponse.json({ erro: "Falha ao salvar" }, { status: 500 });
  }
}

// 🌟 ESSA É A FUNÇÃO QUE REESCREVEMOS PARA GARANTIR A DELEÇÃO:
export async function DELETE(request: Request) {
  try {
    // 1. Lemos o corpo da requisição primeiro como texto simples
    const textoBruto = await request.text();
    
    if (!textoBruto) {
      return NextResponse.json({ erro: "Requisição vazia" }, { status: 400 });
    }

    // 2. Convertemos o texto para objeto e pegamos o index
    const corpo = JSON.parse(textoBruto);
    const indexParaDeletar = corpo.index;

    // 3. Puxamos a lista atual do arquivo JSON
    const listaAtual = lerBancoComSeguranca();

    // 4. Segurança: Se o index fizer sentido, removemos o item
    if (indexParaDeletar !== undefined && indexParaDeletar >= 0 && indexParaDeletar < listaAtual.length) {
      listaAtual.splice(indexParaDeletar, 1);
    }

    // 5. Gravamos a lista atualizada de volta no arquivo
    fs.writeFileSync(caminhoDoBanco, JSON.stringify(listaAtual, null, 2));

    return NextResponse.json({ mensagem: "Deletado com sucesso!" });
  } catch (erro) {
    console.error("Erro interno ao deletar:", erro);
    return NextResponse.json({ erro: "Falha ao deletar" }, { status: 500 });
  }
}