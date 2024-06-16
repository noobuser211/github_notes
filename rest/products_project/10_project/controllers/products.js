const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});

    res.status(200).json({ myData });
}

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find( req.query );
    res.status(200).json({ myData });
    console.log(req.query);
}

module.exports = { getAllProducts, getAllProductsTesting }
