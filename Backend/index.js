const express =require('express');
const app=express();
const cors=require('cors');
const connection=require('./mongoose');
const user_route=require("./routes/User");
const listing_route=require("./routes/Listing");
connection();
const {static}=require('express');
app.use(cors());
app.use(express.json());
const path = require('path');


app.use("/user",user_route);
app.use("/listing",listing_route)

app.listen(4000,()=>{
    // console.log("));
    console.log("Server listening on port 4000");
})