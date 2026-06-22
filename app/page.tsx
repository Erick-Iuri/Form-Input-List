import Image from "next/image";
/* Importa Proops */
import Formulario from "./componentes/formulario";

export default function Home() {
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
          <div>Formularios e pedidos</div>
          {/* Icone */}
          <div
          className="flex justify-center h-full"
          >
            <div className="w-20 h-20 bg-yellow-400"></div>
          </div>
        </div>
        {/* Conteúdo */}
        <div
          className="flex justify-center
          max-w-360 mx-auto"
        >
          {/* Formulario */}
          <div
            className="flex justify-center
          w-full h-full p-10"
          >
            <Formulario />
          </div>
        </div>
      </main>
    </div>
  );
}
