const express =require('express');
const app=express();
const cors=require('cors');
const connection=require('./mongoose');
const user_route=require("./routes/User")
connection();
app.use(cors());
app.use(express.json());

app.use("/user",user_route);

app.listen(4000,()=>{
    console.log("Server listening on port 4000");
})