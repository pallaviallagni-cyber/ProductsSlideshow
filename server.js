const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Product = require("./models/Product");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/collegeProducts")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching products"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});