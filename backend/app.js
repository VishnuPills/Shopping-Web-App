const express = require("express");

const app = express();

app.use(express.json())
// Route is imported 
const product= require("./routes/productRoute");

app.use("/api/v1",product)


module.exports= app