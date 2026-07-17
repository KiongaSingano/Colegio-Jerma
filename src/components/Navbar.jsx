import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar(){

const [open,setOpen] = useState(false);


return (

<nav className="bg-gradient-to-r from-purple-900 via-purple-700 to-red-700 text-white fixed w-full top-0 z-50 shadow-lg">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


<h1 className="text-2xl font-extrabold tracking-wide">
🎓 Colégio Jerma
</h1>


<div className="hidden md:flex gap-8">

<a href="#inicio" className="hover:text-yellow-400">
Início
</a>

<a href="#cursos" className="hover:text-yellow-400">
Cursos
</a>

<a href="#sobre" className="hover:text-yellow-400">
Sobre
</a>

<a href="#contactos" className="hover:text-yellow-400">
Contactos
</a>

</div>



<button 
className="md:hidden"
onClick={()=>setOpen(!open)}
>

{open ? <X/>:<Menu/>}

</button>


</div>


{
open && (

<div className="md:hidden px-6 pb-5 space-y-4">

<a href="#inicio">
Início
</a>

<a href="#cursos">
Cursos
</a>

<a href="#sobre">
Sobre
</a>

<a href="#contactos">
Contactos
</a>

</div>

)
}


</nav>

)

}