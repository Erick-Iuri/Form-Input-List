"use client"
import Image from "next/image";
import { useState } from "react";

export default function Formulario() {
  /* armazena os valores */
  const [equipamento, setEquipamento] = useState("");

  function teste() {
    console.log(equipamento);
  }

  return (
    <div className="p-5 rounded-md h-full w-5xl bg-[#FFFFFF]">
      {/* titulo formulario */}
      <div className="p-5">
        <p className="text-xl font-bold pb-3">Formulário de Pedido</p>
        <p className="text-md">Aqui está um modelo de formulário de pedido.</p>
      </div>
      {/* Respostas e perguntas */}
      <div className="p-4">
        {/* Nome Responsavel */}
        <label className="block text-md mb-5">
          Coloque seu nome Completo aqui:{" "}
          <span className="text-red-500">*</span>
        </label>

        {/* input nome do responsavel */}
        <input
          type="text"
          placeholder="Exemplo: Alex Pereira"
          className="w-full mb-5 bg-[#F1F3F4] text-gray-800 placeholder-gray-500 
          rounded-sm px-4 py-3 border border-transparent
         focus:border-purple-700
         focus:bg-white outline-none 
         transition-all duration-200"
        />

        {/* Formulario de pedido */}
        <div className="p-4 bg-[#F1F3F4] rounded-sm mb-5">
          {/* Titulo da pergunta */}
          <div className="flex items-center justify-between mb-5 pb-2">
            <h2 className="text-lg font-bold">
              Quais equipamentos você precisa solicitar?
            </h2>
            <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-600"></div>
          </div>

          {/* Resposta da pergunta */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-4 mb-4">
            {/* selecionar resposta */}
            <div className="col-span-9 flex flex-col gap-2">
              <label className="text-md">
                Para a cabeça e o rosto{" "}
                <span className="font-semibold text-md">
                  (Selecione uma opção)
                </span>{" "}
                <span className="text-red-500">*</span>
              </label>

              <div>
                <select
                  className="w-full bg-white placeholder-gray-500 rounded-sm px-4 py-3 border border-transparent focus:border-purple-700 focus:bg-white outline-none transition-all duration-200 cursor-pointer"
                  value={equipamento}
                  onChange={(e) => setEquipamento(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Exemplo: Capacetes
                  </option>
                  <option value="capacetes">Capacetes</option>
                  <option value="oculos">Óculos de proteção</option>
                  <option value="protetor_facial">Protetor Facial</option>
                </select>
              </div>
            </div>

            {/* Número solicitado */}
            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-md whitespace-nowrap">
                Quantos você precisa? <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="20"
                className="w-full bg-white placeholder-gray-500 rounded-sm px-4 py-3 border border-transparent focus:border-purple-700 focus:bg-white outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* pergunta 02 e resposta 02 */}
        </div>

        {/* Adicionar algo mais */}
        <label className="block text-md mb-5">
          Clicando aqui você faz mais um pedido.
        </label>

        {/* input nome do responsavel */}
        <button className="p-4 bg-[#F1F3F4] hover:bg-[#d8d8d890] w-full cursor-pointer rounded-sm">
          Adicionar mais um pedido.
        </button>
      </div>
      {/* botão de enviar e cancelar */}
      <div className="flex justify-end p-4 gap-3">
        <button
          className="px-10 py-3 cursor-pointer rounded-sm
        font-bold hover:bg-red-800 active:bg-red-400
        bg-[#E82A25] text-white"
        >
          Cancelar Pedido
        </button>

        <button
          className="px-20 py-3 cursor-pointer rounded-sm
        font-bold hover:bg-blue-800 active:bg-blue-400
        bg-[#0C5EFF] text-white"
        >
          Concluir
        </button>
      </div>
    </div>
  );
}
