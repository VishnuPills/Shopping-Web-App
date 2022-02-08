const express = require("express");
const errorMiddleware = require("./middleware/error")
const app = express();

app.use(express.json())
// Route is imported 
const product= require("./routes/productRoute");

app.use("/api/v1",product)

//middleware 
app.use(errorMiddleware);

module.exports= app