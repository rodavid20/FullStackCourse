const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
let db;

app.get("/", (req, res) => {
  res.send("hello world 123");
});

app.get("/products", async (req, res) => {
  const products = await db.collection("products").find().toArray();
  //res.send("hello world from products");
  res.json(products);
});

app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await db
    .collection("products")
    .find({ category: category })
    .toArray();
  //res.send("hello world from products");
  res.json(products);
});

app.post("/products", async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Product
  const product = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    isStocked: req.body.isStocked,
  };

  // Prepare output in JSON format
  db.collection("products")
    .insertOne(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the Product.",
      });
    });
});

const start = async () => {
  const client = new MongoClient("mongodb://0.0.0.0:27017/shop");
  await client.connect();
  db = client.db();
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
};

start();
