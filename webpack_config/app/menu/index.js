
const menu = `
<html>
<head>
	<title>Inicio</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1 maximum-scale=1, minimun-scale=1">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>

<body>
	<header>
		<div class="contenedor">
			<h1 class="icon-grocery-store">TechMarts</h1>
			<input type="checkbox" id="menu-bar">
			<label class="icon-th" for="menu-bar"></label>
			<nav class="menu">
				<a href="/">Inicio</a>
				<a href="/acercade">acerda de</a>
				<a href="/contacto">Contactos</a>
				<a href="/categoria">Categoria</a>
					<ul>
						<li><a href="/EquiposMoviles">Equipos Moviles</a></li>
						<li><a href="/Games">Games</a></li>
						<li><a href="/MicroComputadoras">MicroComputadoras</a></li>
						<li><a href="/Software">Softwares</a>
					</ul>	
			</nav>
		</div>
	</header>

	<main>
		<section id="banner">
			<img src="http://imaginadigital.mx/wp-content/uploads/2015/06/tienda-en-linea.jpg">
			<div class="contenedor">
				<h2>TechMarts La Tienda del Futuro</h2>
				<p>Quieres Conocer mas Hacerca de La tienda</p>
				<a href="#">Leer Mas</a>
			</div>
		</section>

		<section id="bienvenido">
			<h2>BIENVENIDO A NUESTRA TIENDA EN LINEA </h2>
			<p>Somos una nueva tienda online. Ya sabemos que hay muchas, y seguramente muchas de ellas mejores que nosotros, pero estamos trabajando muy duro para llegar ahí. Somos un equipo joven y dinámico, a quienes nos encanta lo que hacemos. Intentamos dar a nuestros clientes el mejor servicio, y nos sentimos orgullosos de poco a poco haber ido fidelizado a varios de nuestros primeros clientes. Ofrecemos atención telefónica para cualquier duda, recomendaciones y si buscas algo que no tenemos, nosotros lo buscamos por ti, para aconsejarte donde encontrarlo si no te lo pudiéramos proporcionar nosotros. </p>
			
		</section>

		<section id="blog">
			<h3>Lo ultimo de Nuestra Tienda</h3>
			<div class="contenedor">
				<article>
					
					<img src="https://cdn.dribbble.com/users/300766/screenshots/1290406/imac.gif">
					<h4>Micro Computadoras</h4>
				</article>
				<article>
					
					<img src="https://media.giphy.com/media/l1KVaBBR8VGg57Hdm/giphy.gif" >
					<h4>Equipos Moviles</h4>
				</article>
				<article>
					<img src="https://i.imgur.com/l0Jdr4I.gif">
					<h4>Juegos</h4>
				</article>

			</div>
		</section>

		<section id="info">
			<h3>Para Nosotros es importante brindarle Productos de calidad y Con garantia A nuestro cliente</h3>
			<div class="contenedor">
				<div class="info-pet">
					<img src="http://ceoconsultores.mx/assets/images/certificacion-1400x881.png">
					<h4>Certififcados</h4>
				</div>
				<div class="info-pet">
					<img src="http://answare-tech.com/wp-content/uploads/2017/04/logo-iso-596x540.png">
					<h4>Calidad</h4>
				</div>
				<div class="info-pet">
					<img src="http://conceptodefinicion.de/wp-content/uploads/2011/09/garantia.png">
					<h4>Garantia</h4>
				</div>
				<div class="info-pet">
					<img src="http://www.myway.com.br/wp-content/uploads/2015/07/reembolso-proporcional-300x297.png">
					<h4>Reembolsoo</h4>
				</div>
			</div>
		</section>
	</main>

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
