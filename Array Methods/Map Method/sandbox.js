const prices = [10,30,40,60,50,20,90];

const pricesHalf = prices.map((price) =>{
    if (price > 30) {
        return price / 2
    }else{
        return price;
    }
});
console.log(prices);
console.log(pricesHalf);

// another example

const products = [
    {name: "TV", price: 40},
    {name: "Machine wash", price: 80},
    {name: "Mobile", price: 20},
    {name: "Water cooler", price: 30}
];

const afterDiscount = products.map((p) =>{
    if(p.price > 30){
        return {name : p.name, price : p.price / 2};
    }else{
        return {name : p.name, price : p.price};
    }
});

//in this example we don't use |p.price = p.price / 2| becz it change the original value insted we created new object
console.log(products);
console.log(afterDiscount);
