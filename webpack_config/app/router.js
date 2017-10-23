import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
import categoria from './categoria'
import EquiposMoviles from './EquiposMoviles'
import Games from './Games'
import MicroComputadoras from './MicroComputadoras'
import Software from './Software'



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

page('/EquiposMoviles', () => {
	main.innerHTML = layout(EquiposMoviles)
})

page('/Games', () => {
	main.innerHTML = layout(Games)
})

page('/MicroComputadoras', () => {
	main.innerHTML = layout(MicroComputadoras)
})

page('/Software', () => {
	main.innerHTML = layout(Software)
})