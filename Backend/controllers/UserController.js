const UserModel=require("../models/UserModel");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const UserController={
    async SignUp(req,res){
        try{
            const{firstname,lastname,email}=req.body;
            const password=await bcrypt.hash(req.body.password,10);
            const newUser=new UserModel({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });
            await newUser.save();
            res.status(201).json({message:"true",user:newUser});
        }
        catch(error){
            console.error("Error creating user:",error);
            res.status(500).json({message:"Error"});
        }
    },
    async Login(req,res){
        try{
            const{email,password}=req.body;
            const user=await UserModel.findOne({email:email});
            if(user){
                const isPasswordValid=await bcrypt.compare(req.body.password,user.password);
                if(isPasswordValid){
                    console.log("found");
                    const token=jwt.sign({
                        email:user.email
                    },'secret123')
                    res.status(201).json({message:"true",user,token});
                }
                else{
                    res.status(201).json({message:"false",user,token});
                }
            }
            else{
                res.status(201).json({message:"false",user,token});
            }
        }
        catch(error){
            console.log("error");
        }

    }
}
module.exports=UserController;