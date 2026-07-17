import { 
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


export default function Footer(){


return (

<footer className="
bg-purple-950
text-white
py-10
">


<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
">


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
">



{/* Informações */}

<div>


<h2 className="
text-3xl
font-extrabold
">

CEIPP

<span className="
text-red-500
">

 Jerma

</span>

</h2>



<p className="
mt-4
text-gray-300
leading-relaxed
">

Sistema de Inscrições e Matrículas Online.
Educação de qualidade para o futuro dos estudantes.

</p>


</div>







{/* Links */}

<div>


<h3 className="
text-xl
font-bold
text-red-400
mb-4
">

Links rápidos

</h3>


<div className="
space-y-3
text-gray-300
">


<a 
href="#inicio"
className="block hover:text-white transition"
>
Início
</a>


<a 
href="#sobre"
className="block hover:text-white transition"
>
Sobre
</a>


<a 
href="#cursos"
className="block hover:text-white transition"
>
Cursos
</a>


<a 
href="#contactos"
className="block hover:text-white transition"
>
Contactos
</a>


</div>


</div>








{/* Contactos */}

<div>


<h3 className="
text-xl
font-bold
text-red-400
mb-4
">

Contactos

</h3>




<div className="
space-y-4
text-gray-300
">


<p className="
flex
items-center
gap-3
">

<FaPhone className="text-red-400"/>

+244 946 614 043

</p>



<p className="
flex
items-center
gap-3
">

<FaEnvelope className="text-red-400"/>

ceippjerma@gmail.com

</p>



<p className="
flex
items-center
gap-3
">

<FaMapMarkerAlt className="text-red-400"/>

1º de Maio, Cabinda - Angola

</p>


</div>







{/* Redes sociais */}

<div className="
flex
gap-3
mt-6
">


<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-blue-600
transition
"
>

<FaFacebookF/>

</a>



<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-pink-600
transition
"
>

<FaInstagram/>

</a>




<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-red-600
transition
"
>

<FaYoutube/>

</a>




<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-green-600
transition
"
>

<FaWhatsapp/>

</a>



</div>


</div>



</div>



</div>






<div className="
border-t
border-white/20
mt-8
pt-5
text-center
text-gray-400
text-sm
">

© {new Date().getFullYear()} Complexo Escola e Instituto Politécnico Privado Jerma.
Todos os direitos reservados.

</div>



</footer>

)

}