import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const cursos = [

{
titulo:"Ciências Físicas e Biológicas",
descricao:"Curso direcionado para o estudo das ciências naturais, preparando estudantes para áreas de saúde, engenharia e investigação científica."
},

{
titulo:"Ciências Económicas e Jurídicas",
descricao:"Formação nas áreas de economia, gestão, direito e organização empresarial."
},

{
titulo:"Electricidade",
descricao:"Curso técnico focado em instalações elétricas, sistemas de energia e manutenção."
},

{
titulo:"Informática",
descricao:"Formação em programação, redes de computadores e tecnologias digitais."
},

{
titulo:"Desenho e Projecto",
descricao:"Curso voltado para desenho técnico, elaboração de projectos e criação."
},

{
titulo:"Gestão de Recursos Humanos",
descricao:"Preparação para gestão de pessoas, recrutamento e organização empresarial."
},

{
titulo:"Finanças",
descricao:"Curso focado em gestão financeira, contabilidade e administração."
}

];


export default function Courses(){

const [inicio,setInicio]=useState(0);



function avancar(){

setInicio((prev)=>
(prev + 1) % cursos.length
);

}



function recuar(){

setInicio((prev)=>
(prev - 1 + cursos.length) % cursos.length
);

}



const cursosVisiveis=[

cursos[inicio],

cursos[(inicio+1)%cursos.length],

cursos[(inicio+2)%cursos.length],

cursos[(inicio+3)%cursos.length]

];



return (

<section
id="cursos"
className="
py-24
px-6
bg-gray-50
"
>


<div className="
max-w-7xl
mx-auto
">


<div className="
text-center
mb-14
">

<h2 className="
text-4xl
font-extrabold
text-purple-900
">

Cursos Disponíveis

</h2>


<p className="
mt-4
text-gray-600
">

Conheça as formações do Colégio Jerma

</p>

</div>



<div className="
flex
items-center
gap-5
"
>


<button
onClick={recuar}
className="
bg-purple-700
text-white
p-3
rounded-full
hover:bg-purple-900
transition
shadow-lg
"
>

<ChevronLeft/>

</button>




<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
flex-1
overflow-hidden
"
>


<AnimatePresence mode="popLayout">

{

cursosVisiveis.map((curso)=>(


<motion.div

key={curso.titulo}

initial={{
opacity:0,
x:80
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-80
}}

transition={{
duration:0.4
}}

className="
bg-white
rounded-2xl
shadow-lg
p-7
border-b-4
border-red-600
"

>


<div className="
w-14
h-14
rounded-full
bg-purple-100
flex
items-center
justify-center
mb-5
">

<BookOpen
className="text-purple-700"
/>

</div>



<h3 className="
font-bold
text-lg
text-purple-900
">

{curso.titulo}

</h3>



<p className="
mt-4
text-gray-600
text-sm
">

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
bg-purple-700
text-white
p-3
rounded-full
hover:bg-purple-900
transition
shadow-lg
"
>

<ChevronRight/>

</button>



</div>


</div>


</section>

)

}