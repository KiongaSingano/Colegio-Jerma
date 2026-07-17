import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const cursos = [

{
titulo:"Ciências Físicas e Biológicas",
descricao:
"Formação científica nas áreas de física, biologia e preparação para estudos superiores."
},

{
titulo:"Ciências Económicas e Jurídicas",
descricao:
"Curso voltado para economia, gestão, direito e conhecimentos empresariais."
},

{
titulo:"Electricidade",
descricao:
"Formação técnica em instalações elétricas, energia, manutenção e sistemas elétricos."
},

{
titulo:"Informática",
descricao:
"Aprendizagem de programação, redes, sistemas operativos e tecnologias digitais."
},

{
titulo:"Desenho e Projecto",
descricao:
"Desenvolvimento de competências em desenho técnico e elaboração de projetos."
},

{
titulo:"Gestão de Recursos Humanos",
descricao:
"Preparação para gestão de pessoas, recrutamento e organização empresarial."
},

{
titulo:"Finanças",
descricao:
"Estudo de gestão financeira, contabilidade e administração de recursos."
}

];




export default function Courses(){


const [inicio,setInicio]=useState(0);

const [direcao,setDirecao]=useState(1);

const [quantidade,setQuantidade]=useState(4);





// Detectar tamanho da tela

useEffect(()=>{


function verificarTela(){


if(window.innerWidth < 640){

setQuantidade(1);

}

else if(window.innerWidth < 1024){

setQuantidade(2);

}

else{

setQuantidade(4);

}


}


verificarTela();


window.addEventListener(
"resize",
verificarTela
);


return()=>{

window.removeEventListener(
"resize",
verificarTela
);

}


},[]);







function avancar(){

setDirecao(1);


setInicio((prev)=>

(prev + 1) % cursos.length

);


}






function voltar(){

setDirecao(-1);


setInicio((prev)=>

(prev - 1 + cursos.length) % cursos.length

);


}







const cursosVisiveis=[];


for(let i=0;i<quantidade;i++){


cursosVisiveis.push(

cursos[
(inicio+i)%cursos.length
]

);


}







return(


<section

id="cursos"

className="
py-20
px-4
sm:px-6
bg-gray-50
overflow-hidden
"

>



<div

className="
max-w-7xl
mx-auto
"

>




<div

className="
text-center
mb-12
"

>


<h2

className="
text-3xl
sm:text-4xl
md:text-5xl
font-extrabold
text-purple-900
"

>

Cursos Disponíveis

</h2>


<p

className="
mt-4
text-gray-600
"

>

Conheça as formações disponíveis no CEIPP Jerma

</p>


</div>









<div

className="
flex
items-center
gap-3
"

>







<button

onClick={voltar}

className="
flex
shrink-0
w-10
h-10
sm:w-12
sm:h-12
items-center
justify-center
rounded-full
bg-purple-700
text-white
hover:bg-purple-900
transition
"

>

<ChevronLeft/>

</button>









<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
flex-1
"

>



<AnimatePresence

mode="popLayout"

initial={false}

>


{

cursosVisiveis.map((curso)=>(



<motion.div


key={curso.titulo}



initial={{

x:direcao===1?80:-80,

opacity:0

}}



animate={{

x:0,

opacity:1

}}



exit={{

x:direcao===1?-80:80,

opacity:0

}}



transition={{

duration:0.35

}}



className="
bg-white
rounded-2xl
shadow-lg
p-5
border-b-4
border-red-600
min-h-[250px]
"

>


<div

className="
w-12
h-12
rounded-full
bg-purple-100
flex
items-center
justify-center
mb-4
"

>


<BookOpen

size={26}

className="text-purple-700"

/>


</div>




<h3

className="
text-lg
font-bold
text-purple-900
leading-tight
"

>

{curso.titulo}

</h3>





<p

className="
mt-3
text-sm
text-gray-600
leading-relaxed
"

>

{curso.descricao}

</p>



</motion.div>



))


}



</AnimatePresence>



</div>









<button

onClick={avancar}

className="
flex
shrink-0
w-10
h-10
sm:w-12
sm:h-12
items-center
justify-center
rounded-full
bg-purple-700
text-white
hover:bg-purple-900
transition
"

>


<ChevronRight/>


</button>






</div>



</div>


</section>


)


}