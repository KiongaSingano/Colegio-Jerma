import { TypeAnimation } from "react-type-animation";
import { ClipboardPen, Search } from "lucide-react";
import escola from "../assets/escola.jpg";


export default function Hero() {

  return (

    <section

      id="inicio"

      className="
        relative
        min-h-[520px]
        sm:min-h-[600px]
        md:min-h-screen
        flex
        items-center
        justify-center
        bg-center
        bg-cover
        overflow-hidden
        pt-20
        pb-8
      "

      style={{
        backgroundImage: `url(${escola})`
      }}

    >



      {/* Camada escura */}

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
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-10
          text-center
          text-white
        "

      >






        {/* Inscrições abertas */}

        <div

          className="
            mb-5
            sm:mb-6
            flex
            justify-center
          "

        >

          <span

            className="
              bg-red-600
              px-5
              py-2
              sm:px-8
              sm:py-3
              rounded-full
              text-sm
              sm:text-lg
              md:text-2xl
              font-extrabold
              uppercase
              tracking-wide
              shadow-xl
              animate-pulse
            "

          >

            Inscrições Abertas

          </span>


        </div>









        {/* Texto animado */}

        <TypeAnimation


          sequence={[

            "Garanta já a sua vaga no CEIPP Jerma",

            3000,

            "",

            1000

          ]}


          wrapper="h1"


          speed={50}


          repeat={Infinity}


          cursor={true}


          className="

            block

            whitespace-nowrap

            text-base

            sm:text-3xl

            md:text-5xl

            lg:text-6xl

            font-extrabold

            leading-tight

          "


        />









        {/* Texto de apoio */}


        <p

          className="

            mt-5

            sm:mt-6

            max-w-3xl

            mx-auto

            text-sm

            sm:text-base

            md:text-xl

            text-gray-200

          "

        >

          Faça a sua matrícula online de forma simples,
          rápida e segura. Prepare o seu futuro com o
          CEIPP Jerma.

        </p>









        {/* Botões */}


        <div

          className="

            mt-8

            sm:mt-10

            flex

            flex-row

            justify-center

            items-center

            gap-2

            sm:gap-5

          "

        >





          <button


            className="

              flex

              items-center

              justify-center

              gap-2

              bg-red-600

              hover:bg-red-700

              px-3

              sm:px-8

              py-3

              sm:py-4

              rounded-full

              font-bold

              text-xs

              sm:text-lg

              shadow-xl

              transition

              hover:scale-105

              whitespace-nowrap

            "


          >


            <ClipboardPen

              size={18}

              className="sm:w-[22px] sm:h-[22px]"

            />


            Fazer Inscrição


          </button>









          <button


            className="

              flex

              items-center

              justify-center

              gap-2

              border-2

              border-white

              hover:bg-white

              hover:text-purple-800

              px-3

              sm:px-8

              py-3

              sm:py-4

              rounded-full

              font-bold

              text-xs

              sm:text-lg

              transition

              whitespace-nowrap

            "


          >



            <Search

              size={18}

              className="sm:w-[22px] sm:h:[22px]"

            />


            Consultar Inscrição



          </button>






        </div>





      </div>





    </section>

  );

}