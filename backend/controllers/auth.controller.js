import bcrypt from "bcryptjs";
import User from '../models/user.model.js';

export const signup = async (req,res)=>{
   try {
    const {fullName,username,password, confirmPassword, gender} = req.body;

    if(password != confirmPassword){
        return res.status(400).json({error:"passwords do not match"})
    }
    const user = await  User.findOne({username})//check if user exist 

    if(user){
        return res.status(400).json({error:"Username exist"})
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

    const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "male"? boyProfilePic:girlProfilePic

    })
if(newUser){
    //Generate JWT token here 
    
    await newUser.save(); 
    res.status(201).json({
        _id:newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        boyProfilePic: newUser.profilePic
    });
}else{
    return res.status(400).json({error:"Invalid user Data"});
}
  
   } catch (error) {
    console.log("Error in signup Controller",error.message);
    return res.status(500).json({error:"Internal Server Error"})
   }
};


export const login = (req,res)=>{
    console.log("loginUser");
}

export const logout = (req,res)=>{
    console.log("logoutUser");
}



