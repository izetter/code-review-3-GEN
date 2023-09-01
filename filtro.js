// Tenemos un li de productos

const productos = [
	{ nombre: 'Zapato negro', tipo: 'zapato', color: 'negro', img: './taco-negro.jpg' },
	{ nombre: 'Zapato azul', tipo: 'zapato', color: 'azul', img: './taco-azul.jpg' },
	{ nombre: 'Bota negra', tipo: 'bota', color: 'negro', img: './bota-negra.jpg' },
	{ nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './bota-azul.jpg' },
	{ nombre: 'Zapato rojo', tipo: 'zapato', color: 'rojo', img: './zapato-rojo.jpg' },
];

// change variabe names to meaningful names throughout the file
// ideally use english for variable names, HTML attrinbutes etc.

// use selectors that makes sense
const productList = document.getElementById('lista-de-productos');
const input = document.querySelector('input');

// Prefer not to rely on hoisting. Moved this func higher
const filtrado = (productos = [], texto) => {
	return productos.filter(
		(item) => item.tipo.includes(texto) || item.color.includes(texto)
	);
};

for (let i = 0; i < productos.length; i++) {

	// prefer const and let over var
	// change variabe names to meaningful names
	const div = document.createElement('div');
	div.classList.add('producto');

	const p = document.createElement('p');
	p.classList.add('titulo');
	p.textContent = productos[i].nombre;

	const img = document.createElement('img');
	img.setAttribute('src', productos[i].img);

	div.appendChild(p);
	div.appendChild(img);

	productList.appendChild(div);
}

// displayProductos(productos);
const botonDeFiltro = document.querySelector('button');

botonDeFiltro.onclick = function () {
	while (productList.firstChild) {
		productList.removeChild(productList.firstChild);
	}

	const texto = input.value;
	console.log(texto);
	const productosFiltrados = filtrado(productos, texto);

	// prefer const and let over var
	// change variabe names to meaningful names
	for (let i = 0; i < productosFiltrados.length; i++) {
		const div = document.createElement('div');
		div.classList.add('producto');

		const p = document.createElement('p');
		p.classList.add('titulo');
		p.textContent = productosFiltrados[i].nombre;

		const img = document.createElement('img');
		img.setAttribute('src', productosFiltrados[i].img);

		div.appendChild(p);
		div.appendChild(img);

		productList.appendChild(div);
	}
};

