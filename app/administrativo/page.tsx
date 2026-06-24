"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Adm() {

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
                <p className="text-md">Aqui estão todos os pedidos.</p>
              </div>
              {/* Todos os pedidos */}
              <div className="flex gap-1 p-5">
                <p className="text-md">Pedido feito por:</p>
                <p className="font-bold">Alex Pereira</p>
              </div>

              <div className="flex gap-2 px-5">
                <p
                  className="cursor-pointer rounded-sm hover:bg-gray-200
                text-md bg-[#F1F3F4] p-3 w-6/7"
                >
                  Visualizar PDF
                </p>
                <button
                  className="cursor-pointer rounded-sm
                text-md bg-[#E82A25] text-white w-1/7"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
