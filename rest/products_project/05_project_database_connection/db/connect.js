const mongoose = require("mongoose");

uri = "mongodb://localhost:27017/wikiDB";

const connectDB = () => {
    console.log("connect db");
    return mongoose.connect(uri, {
        useNewurlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;
