const express= require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors");
const healthRought = require("./src/routes/health");
const posteRought = require("./src/routes/poste");

dotenv.config();
const app= express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend')));

app.use("/api",healthRought);
app.use("/api",posteRought);
// app.use("/",posteRought);

const port = process.env.PORT || 3000;
// app.get("/yy",(req,res)=>{
//     res.send("hello");
// })
 mongoose.connect(process.env.MONGO_URL)
 .then(()=>{
console.log("mongo connected");
 }).catch((err)=>{
    console.log("mongo connected ",err);
 });
        
  



app.listen(port,()=>{
    console.log(`This server is run on the port ${port}`);

});