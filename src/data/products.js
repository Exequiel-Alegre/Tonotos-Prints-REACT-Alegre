const products = [
  { id: '1', title: 'Impresión Fotografica', category: 'impresiones2d', price: 1000, description: 'Impresión en Papel Fotografico de 180gr', image: 'src/assets/impresionfoto.jpg' },
  { id: '2', title: 'Llavero 3D', category: 'impresiones3d', price: 3000, description: 'Impresion y armado de llavero 3D personalizados por 50 unidades', image: 'src/assets/llaveros3d.png' },
  { id: '3', title: 'Stickers', category: 'stickers', price: 2000, description: 'Impresion y corte de stickers personalizados', image: 'src/assets/stickers.png' },
  { id: '4', title: 'Tarjetas Personales', category: 'impresiones2d', price: 5000, description: 'Diseño, Impresión y corte de tarjetas personales', image: 'src/assets/tarjetasper.png' }
]

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 600)
  })
}

export function fetchProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p = products.find(x => x.id === id)
      if (p) resolve(p)
      else reject(new Error('Producto no encontrado'))
    }, 600)
  })
}

export default products