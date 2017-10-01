import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
import categoria from './categoria'
import smartphone from './smartphone'
import laptop from './laptop'
import juegos from './juegos'
import accesorios from './accesorios'

const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
})

page('/categoria', () => {
	main.innerHTML = layout(categoria)
})

page('/smartphone', () => {
	main.innerHTML = layout(smartphone)
})

page('/laptop', () => {
	main.innerHTML = layout(laptop)
})

page('/juegos', () => {
	main.innerHTML = layout(juegos)
})

page('/accesorios', () => {
	main.innerHTML = layout(accesorios)
})