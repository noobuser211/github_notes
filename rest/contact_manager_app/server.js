const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

const product_routes = require("./routes/contactRoutes");
const user_routes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

// It parses the stream of data received.
app.use(express.json());
app.use("/api/contacts", product_routes);
app.use("/api/users", user_routes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
