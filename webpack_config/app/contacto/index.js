const contacto = `

<html>
<head>
	<title>Formulario De Contacto</title>
	<meta charset="UTF-8">
	<style type="text/css">
	body{
	background-image: url(CONTACTENOS.png);
	background-size: 100vw 137vh;
	background-attachment: fixed;
	margin: 0;
	font-family: monospace;
}

form{
	width: 450px;
	margin: auto;
	background: rgba(0,0,0,0.4);
	box-sizing: border-box;
	margin-top: 20px;
	border-radius: 7px;
}


h2{
	color: #fff;
	text-align: center;
	margin: 0;
	font-size: 30px;
	margin-bottom: 20px;
}

input,textarea{
	width: 100%;
	margin-bottom: 20px;
	padding: 7px;
	box-sizing: border-box;
	font-size: 17px;
	border: none;
}

textarea{
	min-height: 100px;
	max-height: 200px;
	max-width: 100%;
}


#boton{
	background: #31384A;
	color: #fff;
	padding: 20px;
}

#boton:hover{
	cursor: pointer;
}

@media (max-width: 480px){
	form{
		width: 100%;
	}
}

</style>
</head>
<body>
	<form action="">
	<h2>CONTACTENOS</h2>
	<input type="text" name="Nombre" placeholder="Nombre">
	<input type="text" name="Correo" placeholder="Correo">
	<input type="text" name="Telefono" placeholder="Telefono">
	<textarea name= "mensaje" placeholder="Escriba aqui Su Comentario nosotros lo llamaremos"></textarea>
	<input type="button" value="Enviar" id="boton">
	</form>
</body>
</html>
	

<h1>contacto</h1>`

export default contacto
