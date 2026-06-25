"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// 1. Criamos a fôrma do pedido para o TypeScript ficar feliz
type Pedido = {
  nome: string;
  idade?: string | number; // o ? significa que é opcional
};

export default function Adm() {
   const [listaDePedidos, setListaDePedidos] = useState<Pedido[]>([]);

  // 1. FUNÇÃO PURE: Ela apenas busca os dados e atualiza o estado
  async function carregarDados() {
    try {
      const resposta = await fetch("/api/pedidos", { cache: "no-store" });
      const dados = await resposta.json();
      setListaDePedidos(dados);
    } catch (erro) {
      console.error("Erro ao carregar dados:", erro);
    }
  }

  // 2. O useEffect CHAMA A FUNÇÃO DIRETAMENTE
  // Deixando os colchetes vazios [] o React sabe que é para rodar SÓ UMA VEZ ao abrir a página
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    carregarDados();
  }, []);

  /* deleta coisas */
  async function deletaArquivo(indexParaDeletar: number) {
    const resposta = await fetch("/api/pedidos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index: indexParaDeletar }), 
    });

    if (resposta.ok) {
      // Agora ele vai encontrar a função perfeitamente aqui!
      carregarDados();
    }
  }

  return (
    <div>
      <main>
        {/* Navbar */}
        <div
          className="flex justify-between items-center
            text-2xl font-bold text-white px-5
            w-full h-20 bg-[#333545]"
        >
          {/* titulo */}
          <Link href="./">
            <div>Administrativo</div>
          </Link>
          {/* Icone */}
          <div className="flex justify-center items-center h-full">
            <Image
              src="/folderIcon.png"
              alt="Logo da empresa"
              width={80}
              height={80}
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        </div>
        {/* Conteúdo */}
        <div className="flex justify-center max-w-360 mx-auto">
          {/* Solicitações */}
          <div className="flex justify-center w-full h-full p-10">
            <div className="p-5 rounded-md h-full w-5xl bg-[#FFFFFF]">
              {/* titulo formulario */}
              <div className="p-5">
                <p className="text-xl font-bold pb-3">Solicitações</p>
                <p className="text-md text-gray-600">Aqui estão todos os pedidos.</p>
              </div>
              {/* Todos os pedidos */}
              <div className="flex gap-1 p-5 text-gray-800">
                {listaDePedidos.length === 0 ? (
                  <p className="text-gray-500">Nenhum pedido feito ainda...</p>
                ) : (
                  <div className="space-y-3 w-full">
                    {listaDePedidos.map((pedidoEPI, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow border border-gray-200"
                      >
                        <p>
                          <strong>Pedido feito por:</strong> {pedidoEPI.nome}
                        </p>
                        <button
                          // 4. MUDANÇA: Nome da função corrigido para 'deletaArquivo'
                          onClick={() => deletaArquivo(index)}
                          className="cursor-pointer rounded-sm text-md bg-[#E82A25] hover:bg-red-700 text-white w-30 p-2 font-bold text-center transition"
                        >
                          Deletar
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}