/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app'

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = window.Intl.NumberFormat('en-EN',{
        style:'currency',
        currency: 'USD',
    }).format(price)
    return newPrice
}
//Web API
//Conectarnos al servidor
window.fetch(`${baseUrl}/api/avo`)
    .then(response => response.json())
    .then(data => {
        const todosLosItems = []
        data.data.forEach(item => {
            //crear imagen
            const imagen = document.createElement('img')
            document.body.appendChild(imagen)
            imagen.src = baseUrl+item.image
            imagen.className = 'inline-block w-60 rounded-full border-2 border-slate-100'
            //crear titulo
            const title = document.createElement('h3')
            document.body.appendChild(title)
            title.textContent = item.name
            title.className = 'inline-block'
           
            //crear precio
            const precio = document.createElement('div')
            document.body.appendChild(precio)
            precio.textContent = formatPrice(item.price) 
            precio.className = 'inline-block relative w-full'

            const container = document.createElement('div')
            container.append(imagen,title,precio)
            container.className = 'group mx-auto w-60 p-4 m-2 hover:bg-sky-600'

            todosLosItems.push(container)
            
        });
        appNode.append(...todosLosItems)
    })
//Procesar la respuesta y convertirla en json
//JSON -> Data -> Renderizar info en el browser

