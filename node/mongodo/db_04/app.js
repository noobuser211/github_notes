const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

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

// Fruit.updateOne({_id: "650c25bd430af1189329ec05"}, {name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document.");
//     }
// });

// Fruit.updateOne({_id: "663e28a1f785a79d4ed18cb5"}, {name: "Banana"})
//     .then(() => {
//         console.log("Successfully updated the document.");
//     })
//     .catch(function() {
//         console.log(err);
//     })

// Fruit.deleteOne({name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document.");
//     }
// });

// Fruit.deleteOne({name: "Banana"})
//     .then(() => {
//         console.log("Successfuly deleted the document.");
//     })
//     .catch(function() {
//         console.log(err);
//     })

// Person.deleteMany({name: "John"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all the documents.");
//     }
// });

// Fruit.deleteMany({name: "Ice Cream"})
//     .then(() => {
//         console.log("Successfully deleted all the documents.");
//     })
//     .catch(function() {
//         console.log(err);
//     })

// Newer Code
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
