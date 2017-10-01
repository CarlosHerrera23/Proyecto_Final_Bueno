 

const menu = `
<style type="text/css"> 
#button {
margin: 0; 
padding: 0; 
} 
#button li { 
display: inline; 
} 
#button li a { 
font-family: Arial; 
font-size:22px; 
text-decoration: none; 
float:center; 
padding: 20px; 
background-color: #2175bc; 
color: #fff; 
width: 480px;
margin: 0 auto;
} 
ul{
	list-style:none
}

#button li a:hover { 
background-color: #2586d7; 
margin-top:-2px; 
padding-bottom:12px;
} 

#button li>a:hover{
  color: black;
  background-color: #eaeaea;
}
#button>li{
	text-align:left;
}

#button>li>ul{
  display: none;
}
#button>li:hover>ul {
  display:block;
}


</style>

<ul id ="button">
	<li><a href="/">Inicio</a></li>
	<li><a href="/acercade">Acerca de</a></li>
	<li><a href="/contacto">Contacto</a></li>
	<li><a href="/categoria">Categoria</a>
		<ul>
			<li><a href="/smartphone">SmartPhone</a></li>
			<li><a href="/laptop">Laptop</a></li>
			<li><a href="/juegos">Juegos de video</a></li>
			<li><a href="/accesorios">Accesorios</a>
		</ul>	
	</li>
  </ul>
</ul>
`
export default menu