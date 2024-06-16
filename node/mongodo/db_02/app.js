const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find()
    .then((fruits) => {
        // console.log(fruits);
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    })
    .catch(function() {
        console.log(err);
    });
