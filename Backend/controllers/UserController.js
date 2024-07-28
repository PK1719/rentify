const UserModel=require("../models/UserModel");

const UserController={
    async SignUp(req,res){
        try{
            const{firstname,lastname,email,password}=req.body;
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
            const user=await UserModel.findOne({email:email,password:password});
            if(user){
                console.log("found");
                res.status(201).json({message:"true",user});
            }
            else{
                res.status(201).json({message:"false",user});
            }
        }
        catch(error){
            console.log("error");
        }

    }
}
module.exports=UserController;