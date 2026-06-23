"use client";
import Image from "next/image";
import { useState } from "react";

export default function Pdf() {
  return (
    <div id="pdf-content" className="flex justify-center items-center h-300">
      <div className="bg-white rounded-md w-5xl h-230">
        {/* Faixa azul */}
        <div
          className="bg-[#0C5EFF] w-full h-14 
        rounded-tl-sm
        rounded-tr-sm"
        ></div>
        {/* Titulo */}
        <div className="text-2xl font-bold px-10 pt-8 pb-5">
          SOLICITAÇÃO DE EPI
        </div>
        <div className="text-md px-10">
          Registro de requisição e entrega de Equipamento de Proteção Individual
        </div>
        {/* Responsavel solicitação */}
        <div className="p-10">
          <div
            className="flex items-center gap-4
            w-full h-13 bg-[#C5D8FF]"
          >
            <div className="w-4 h-full bg-[#0C5EFF]"></div>
            {/* Nome do responsavél */}
            <div className="flex gap-1 text-md">
              <p className="font-bold">Solicitado por:</p>
              <p>Alex Pereira</p>
            </div>
          </div>
        </div>
        {/* Equipamento solicitado */}
        <div className="font-bold text-md px-10">
          Quais equipamentos foram solicitado:
        </div>
        <div className="flex justify-between gap-1 px-10 py-5">
          {/* item solicitado */}
          <div className="w-4/5">
            <p className="pb-3">Para a cabeça e o rosto:</p>
            <div className="p-3 bg-[#F1F3F4]">Capacete</div>
          </div>
          {/* Quantidade */}
          <div className="w-1/5">
            <p className="pb-3">Quantidade:</p>
            <div className="p-3 bg-[#F1F3F4]">20</div>
          </div>
        </div>
        {/* Equipamento solicitado 02 */}
        <div className="font-bold text-md px-10">
          Quais equipamentos foram solicitado:
        </div>
        <div className="flex justify-between gap-1 px-10 py-5">
          {/* item solicitado */}
          <div className="w-4/5">
            <p className="pb-3">Para a cabeça e o rosto:</p>
            <div className="p-3 bg-[#F1F3F4]">Capacete</div>
          </div>
          {/* Quantidade */}
          <div className="w-1/5">
            <p className="pb-3">Quantidade:</p>
            <div className="p-3 bg-[#F1F3F4]">20</div>
          </div>
        </div>
        {/* Equipamento solicitado 03 */}
        <div className="font-bold text-md px-10">
          Quais equipamentos foram solicitado:
        </div>
        <div className="flex justify-between gap-1 px-10 py-5">
          {/* item solicitado */}
          <div className="w-4/5">
            <p className="pb-3">Para a cabeça e o rosto:</p>
            <div className="p-3 bg-[#F1F3F4]">Capacete</div>
          </div>
          {/* Quantidade */}
          <div className="w-1/5">
            <p className="pb-3">Quantidade:</p>
            <div className="p-3 bg-[#F1F3F4]">20</div>
          </div>
        </div>
      </div>
    </div>
  );
}
