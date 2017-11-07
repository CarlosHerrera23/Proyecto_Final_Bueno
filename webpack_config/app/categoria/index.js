import firebase from 'firebase'
import config from'./../config'

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}

var db = firebase.database()   
const categoria = () => {
	const obtenerDatos= function (datos) {
		var arrayDatos = datos.val()
		//var html =  templateCat(arrayDatos)
		var keys = Object.keys(arrayDatos)  

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i]
			var equipo = arrayDatos[key]
			//'<h1>${equipo.Modelo}</h1>'

     
       
}
 console.log(keys)
		/*const main = document.querySelector('main')
		main.innerHTML = index//layout(index)*/
		

	}

	db.ref('Categoria').once('value').then(obtenerDatos)
	
	/*const main = document.querySelector('main')
	main.innerHTML = layout(categoria)*/
}

export default categoria
