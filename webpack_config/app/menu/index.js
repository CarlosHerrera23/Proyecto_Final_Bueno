
const menu = `

<style type="text/css"> 
#menu {
margin: 0; 
padding: 0; 
} 
#menu li { 
display: inline; 
} 
#menu li a { 
font-family: Arial; 
font-size:15px; 
text-decoration: none; 
float:center; 
padding: 10px; 
background-color: none; 
color: #fff; 
width: 480px;
margin: 0 auto;
} 
ul{
	list-style:none
}
#menu li a:hover { 
background-color: #2586d7; 
margin-top:-7px; 
padding-bottom:px;
} 
#menu li>a:hover{
  color: black;
  background-color: #eaeaea;
}
#menu>li{
	text-align:center;
	display: inline;
}
#menu>li>ul{
  display: none;
}
#menu>li:hover>ul {
  display:block;
}
</style>

<html>


<body>
	<header>
		<div class="contenedor">
			<h1 class="icon-grocery-store">TechMarts</h1>
			<input type="checkbox" id="menu-bar">
			<label class="icon-th" for="menu-bar"></label>
			<ul id="menu">

			<li><a href="/">Inicio</a>
			<li><a href="/acercade">acerda de</a>
			<li><a href="/contacto">Contactos</a>
			<li><a href="/categoria">Categoria</a>
					<ul>
						<li><a href="/EquiposMoviles">Equipos Moviles</a></li>
						<li><a href="/Games">Games</a></li>
						<li><a href="/MicroComputadoras">MicroComputadoras</a></li>
						<li><a href="/Software">Softwares</a>
					</ul>	
			</ul>
		</div>
	</header>


	<footer>
		<div class="contenedor">
			<p class="copy">TechMarts &copy; 2017</p>
			<div class="sociales">
				<a class="icon-facebook-squared" href="#"></a>
				<a class="icon-twitter" href="#"></a>
				<a class="icon-instagram" href="#"></a>
				<a class="icon-youtube-play" href="#"></a>
				<a class="icon-github" href="#"></a>
				<a class="icon-gplus" href="#"></a>
				<a class="icon-twitch" href="#"></a>
			</div>
		</div>
	</footer>

</body>
</body>
</html>
`
export default menu
