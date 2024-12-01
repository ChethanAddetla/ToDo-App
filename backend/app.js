const express  = require("express");
const mongoose  = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const  app = express();
const db = mongoose.connect("mongodb+srv://chethanaddetlapp:chethanDB@cluster0.fxuv6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("This is the first page");
})

app.use(express.json());
app.use("/user",userRoutes)


app.listen(PORT,()=>console.log(`Server is running on PORT : ${PORT}`))