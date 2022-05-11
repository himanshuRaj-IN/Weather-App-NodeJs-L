const name = 'Himanshu Raj'
const userAge =20
const user = {
    name,
    ager:  userAge,
    location : 'India'
}

console.log(user.name)

// destructring of obbjet 
const product ={
    label : 'Red NoteBook',
    price : 3,
    stock : 333,
    sale  : undefined
}

// const label = product.label
// const stock = product.stock

// console.log(label)
// console.log(stock)

const {label, stock: availableStock, rating  = 5} = product

// Simple deStructuring stock
console.log(label)
// changing variable name
console.log(availableStock)
// adding default value
console.log(rating)


const transaction = (type,{label, stock}) =>{
    console.log(label)
}
transaction('order',product)