const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    const myData = await apiData;
    res.status(200).json({ myData });
}

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find( req.query ).sort("name -price");
    res.status(200).json({ myData });
    console.log(req.query);
}

module.exports = { getAllProducts, getAllProductsTesting }
