import { useState } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Users,
  Phone,
  ClipboardEdit
} from "lucide-react";

import logo from "../assets/logo.png";


export default function Navbar(){

const [menuOpen,setMenuOpen] = useState(false);


const links = [

{
nome:"Início",
icon:<Home size={18}/>,
url:"#inicio"
},

{
nome:"Cursos",
icon:<BookOpen size={18}/>,
url:"#cursos"
},

{
nome:"Sobre",
icon:<Users size={18}/>,
url:"#sobre"
},

{
nome:"Contactos",
icon:<Phone size={18}/>,
url:"#contactos"
}

];



return(

<nav
className="
fixed
top-0
left-0
w-full
z-50
bg-purple-950/95
backdrop-blur-md
shadow-lg
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-3
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
"
>


<img

src={logo}

alt="CEIPP Jerma"

className="
w-16
h-16
object-contain
"

/>


<div>

<h1
className="
text-xl
md:text-2xl
font-extrabold
text-white
"
>

CEIPP
<span className="text-red-500">
 Jerma
</span>

</h1>


<p
className="
text-xs
text-gray-300
"
>

Aposta Pelo Ensino de Qualidade

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


{

links.map((link,index)=>(


<a

key={index}

href={link.url}

className="
group
relative
flex
items-center
gap-2
text-gray-200
hover:text-white
transition
"

>


{link.icon}

<span>
{link.nome}
</span>



{/* Barra inferior */}

<span

className="
absolute
left-0
bottom-[-6px]
h-[2px]
w-0
bg-red-500
transition-all
duration-300
group-hover:w-full
"

></span>



</a>


))

}





<a

href="#"

className="
flex
items-center
gap-2
bg-red-600
px-5
py-2
rounded-full
font-semibold
hover:bg-red-700
transition
shadow-md
"

>

<ClipboardEdit size={18}/>

Matrícula

</a>



</div>









{/* Mobile */}

<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
md:hidden
text-white
"

>

{
menuOpen ?
<X size={30}/>
:
<Menu size={30}/>
}

</button>



</div>







{/* Menu mobile */}

{

menuOpen && (

<div
className="
md:hidden
bg-purple-900
px-6
py-5
space-y-4
"
>


{

links.map((link,index)=>(


<a

key={index}

href={link.url}

className="
flex
items-center
gap-3
text-white
"

>

{link.icon}

{link.nome}

</a>


))

}


</div>

)

}


</nav>


)

}