const products = [
    {name: 'Apple', pricr: 20 },
    {name: 'Orange', pricr: 50 },
    {name: 'Banana', pricr: 60 },
    {name: 'Limon', pricr: 35 },
    {name: 'Watermelon', pricr: 44 },
    {name: 'Ananas', pricr: 26 },
    {name: 'Avocado', pricr: 90 }
]

// const filterd = products.filter((product) => {
//     return product.pricr > 35
// })

// const promos = filterd.map((product) =>{
//     return `${product.name} its price ${product.pricr / 2} in killo.`;
// })

// console.log(promos);

///////////////////////////
// Now lets try Chaining //
///////////////////////////

const filterd = products
    .filter( product => product.pricr > 35 )
    .map(product => `${product.name} its price ${product.pricr / 2} in killo.` )

console.log(filterd);

//make a new line
// add tab
//each function in one line