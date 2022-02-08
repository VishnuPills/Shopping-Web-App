const app = require("./app");
const dotenv= require("dotenv");
const connectdb= require("./config/database")

dotenv.config({path:"backend/config/config.env"});

// db connection 

connectdb()

const server= app.listen(process.env.PORT,()=>{
    console.log("Server is running on http://localhost:"+ process.env.PORT)
})

//unhandled promise rejection 
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });