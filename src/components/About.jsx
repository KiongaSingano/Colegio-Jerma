import { Target, Eye, Heart } from "lucide-react";
import escola from "../assets/escola.jpg";


export default function About(){


return(

<section

id="sobre"

className="
py-20
px-4
sm:px-6
bg-white
"

>


<div

className="
max-w-7xl
mx-auto
"

>



{/* Título */}

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

Sobre o CEIPP Jerma

</h2>



<p

className="
mt-4
max-w-2xl
mx-auto
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>

Uma instituição comprometida com a formação académica,
profissional e humana dos seus estudantes.

</p>



</div>








{/* Parte principal */}


<div

className="
grid
md:grid-cols-2
gap-8
lg:gap-12
items-center
"

>





{/* Imagem */}

<div>


<img


src={escola}


alt="Colégio Jerma"


className="
w-full
h-[280px]
sm:h-[350px]
lg:h-[420px]
object-cover
rounded-3xl
shadow-xl
"




/>


</div>








{/* Texto */}


<div>


<h3

className="
text-2xl
sm:text-3xl
font-bold
text-purple-900
mb-4
"

>

Educação para transformar futuros

</h3>




<p

className="
text-gray-600
text-sm
sm:text-base
leading-relaxed
"

>


O CEIPP Jerma tem como compromisso oferecer
uma educação de qualidade, preparando os estudantes
com conhecimentos, competências e valores necessários
para enfrentar os desafios do futuro.


</p>





<div

className="
mt-6
border-l-4
border-red-600
pl-4
"

>


<p

className="
text-gray-700
text-sm
sm:text-base
italic
"

>

"Apostamos no ensino de qualidade para construir
uma nova geração preparada para o futuro."

</p>


</div>





</div>





</div>









{/* Missão Visão Valores */}


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-14
"

>








{/* Card */}

<div

className="
bg-gray-50
rounded-2xl
p-6
shadow-md
border-t-4
border-red-600
hover:shadow-xl
hover:-translate-y-2
transition
"

>


<div

className="
w-12
h-12
rounded-full
bg-red-100
flex
items-center
justify-center
mb-4
"

>


<Target

size={26}

className="text-red-600"

/>


</div>



<h3

className="
text-xl
font-bold
text-purple-900
"

>

Missão

</h3>



<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>


Proporcionar uma educação de excelência,
formando cidadãos responsáveis, preparados
e capazes de contribuir para a sociedade.


</p>



</div>









{/* Visão */}

<div

className="
bg-gray-50
rounded-2xl
p-6
shadow-md
border-t-4
border-purple-700
hover:shadow-xl
hover:-translate-y-2
transition
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


<Eye

size={26}

className="text-purple-700"

/>


</div>




<h3

className="
text-xl
font-bold
text-purple-900
"

>

Visão

</h3>




<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>


Ser uma instituição de referência no ensino,
inovação e desenvolvimento integral dos estudantes.


</p>



</div>









{/* Valores */}

<div

className="
bg-gray-50
rounded-2xl
p-6
shadow-md
border-t-4
border-red-600
hover:shadow-xl
hover:-translate-y-2
transition
"

>


<div

className="
w-12
h-12
rounded-full
bg-red-100
flex
items-center
justify-center
mb-4
"

>


<Heart

size={26}

className="text-red-600"

/>


</div>




<h3

className="
text-xl
font-bold
text-purple-900
"

>

Valores

</h3>




<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>


Disciplina, respeito, responsabilidade,
excelência, inovação, ética e compromisso
com a comunidade.


</p>




</div>







</div>







</div>


</section>


)

}