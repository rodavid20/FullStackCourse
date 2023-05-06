const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
let db;

app.get("/", (req, res) => {
  res.send("hello world 123");
});

app.get("/products", async (req, res) => {
  const products = await db.collection("products").find().toArray();
  //res.send("hello world from products");
  res.json(products);
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
