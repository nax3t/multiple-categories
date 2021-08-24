const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     categories: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        categories: ['vegetable', 'fruit', 'dairy']
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        categories: ['fruit', 'dairy']
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        categories: ['fruit', 'vegetable']
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        categories: ['vegetable']
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        categories: ['dairy']
    },
]
Product.deleteMany({}).then(res=>{
    Product.insertMany(seedProducts)
        .then(res => {
            console.log(res)
            process.exit();
        })
        .catch(e => {
            console.log(e)
        })
}).catch(e => {
    console.log(e)
})