import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";


export default function Navbar(){

const [open,setOpen] = useState(false);


return (

<nav
className="
fixed
top-0
w-full
z-50
bg-purple-950/80
backdrop-blur-md
shadow-lg
text-white
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
"
>


{/* Logo */}

<div
className="
flex
items-center
gap-3
cursor-pointer
"
>


<div
className="
bg-red-600
p-2
rounded-full
shadow-lg
"
>

<GraduationCap size={32}/>

</div>



<div>

<h1
className="
text-xl
md:text-2xl
font-extrabold
tracking-wide
"
>
Colégio Jerma
</h1>


<p
className="
text-xs
text-gray-300
"
>
Educação e Futuro
</p>


</div>


</div>





{/* Menu Desktop */}

<div
className="
hidden
md:flex
items-center
gap-8
"
>


<a
href="#inicio"
className="
relative
hover:text-red-400
transition
duration-300
group
"
>
Início

<span
className="
absolute
left-0
bottom-[-8px]
w-0
h-[2px]
bg-red-500
group-hover:w-full
transition-all
duration-300
"
></span>

</a>




<a
href="#cursos"
className="
relative
hover:text-red-400
transition
duration-300
group
"
>
Cursos

<span
className="
absolute
left-0
bottom-[-8px]
w-0
h-[2px]
bg-red-500
group-hover:w-full
transition-all
duration-300
"
></span>

</a>





<a
href="#sobre"
className="
relative
hover:text-red-400
transition
duration-300
group
"
>
Sobre

<span
className="
absolute
left-0
bottom-[-8px]
w-0
h-[2px]
bg-red-500
group-hover:w-full
transition-all
duration-300
"
></span>

</a>





<a
href="#contactos"
className="
relative
hover:text-red-400
transition
duration-300
group
"
>
Contactos

<span
className="
absolute
left-0
bottom-[-8px]
w-0
h-[2px]
bg-red-500
group-hover:w-full
transition-all
duration-300
"
></span>

</a>





{/* Botão */}

<button

className="
bg-red-600
hover:bg-red-700
px-6
py-3
rounded-full
font-bold
transition
duration-300
hover:scale-105
shadow-lg
"

>

Matrícula

</button>



</div>





{/* Mobile button */}

<button

className="
md:hidden
"

onClick={()=>setOpen(!open)}

>

{
open ? <X size={30}/> : <Menu size={30}/>
}


</button>



</div>





{/* Menu Mobile */}

{

open &&

<div
className="
md:hidden
px-6
pb-6
space-y-5
bg-purple-950
"
>


<a href="#inicio"
className="block hover:text-red-400"
>
Início
</a>


<a href="#cursos"
className="block hover:text-red-400"
>
Cursos
</a>


<a href="#sobre"
className="block hover:text-red-400"
>
Sobre
</a>


<a href="#contactos"
className="block hover:text-red-400"
>
Contactos
</a>



<button
className="
w-full
bg-red-600
py-3
rounded-full
font-bold
"
>
Matrícula
</button>


</div>


}


</nav>


)

}