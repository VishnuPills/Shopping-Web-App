const mongoose = require("mongoose");



const connectDatabase = ()=>{
    mongoose.connect(process.env.db, {
        useNewUrlParser: true,
      }).then(()=>{
          console.log("mongo db connected with server");
      }).catch((err)=>{
          console.log(err)
      })
}
module.exports= connectDatabase
