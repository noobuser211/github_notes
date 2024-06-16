const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 10,
    review: "Peachers are so yummy."
});

fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

person.save();

// Newer Code
Fruit.find()
    .then((fruits) => {
        // console.log(fruits);
        // mongoose.connection.close();
        setTimeout(() => {
            mongoose.connection.close();
        }, 5);
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    })
    .catch(function() {
        console.log(err);
    });
