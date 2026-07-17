import { TypeAnimation } from "react-type-animation";
import { ClipboardPen, Search } from "lucide-react";
import escola from "../assets/escola.jpg";


export default function Hero() {

  return (

    <section
      id="inicio"
      className="
        relative
        h-screen
        flex
        items-center
        justify-center
        bg-fixed
        bg-center
        bg-cover
      "
      style={{
        backgroundImage: `url(${escola})`
      }}
    >


      {/* Camada para escurecer imagem */}
      <div
        className="
          absolute
          inset-0
          bg-black/60
        "
      ></div>




      <div
        className="
          relative
          z-10
          text-center
          text-white
          px-6
          max-w-6xl
          mx-auto
        "
      >



        {/* Destaque inscrições */}
        <div
          className="
            mb-8
            flex
            justify-center
          "
        >

          <span
            className="
              bg-red-600
              text-white
              px-8
              py-3
              rounded-full
              text-lg
              md:text-2xl
              font-extrabold
              uppercase
              tracking-widest
              shadow-lg
              animate-pulse
            "
          >
            Inscrições Abertas
          </span>

        </div>




        {/* Texto com efeito de escrita */}
<TypeAnimation

  sequence={[
    "Garanta já a sua vaga no Colégio Jerma",
    3000,
    "",
    1000
  ]}

  wrapper="h1"

  speed={50}

  repeat={Infinity}

  cursor={true}

  className="
    text-3xl
    md:text-5xl
    lg:text-6xl
    font-extrabold
    whitespace-nowrap
  "

/>




        {/* Texto fixo */}
        <p
          className="
            mt-7
            text-base
            md:text-xl
            text-gray-200
            max-w-3xl
            mx-auto
          "
        >
          Faça a sua matrícula online de forma simples,
          rápida e segura. Prepare o seu futuro com o
          Colégio Jerma.
        </p>





        {/* Botões */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
          "
        >



          <button
            className="
              flex
              items-center
              justify-center
              gap-3
              bg-red-600
              hover:bg-red-700
              px-8
              py-4
              rounded-full
              font-bold
              text-lg
              shadow-xl
              transition
              hover:scale-105
            "
          >

            <ClipboardPen size={22}/>

            Fazer Inscrição

          </button>





          <button
            className="
              flex
              items-center
              justify-center
              gap-3
              border-2
              border-white
              hover:bg-white
              hover:text-purple-800
              px-8
              py-4
              rounded-full
              font-bold
              text-lg
              transition
            "
          >

            <Search size={22}/>

            Consultar Inscrição

          </button>



        </div>



      </div>



    </section>

  );

}