const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("connect db");
    return mongoose.connect(uri, {
        useNewurlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;
