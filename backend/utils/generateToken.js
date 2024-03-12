import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    res.cookie("jwt",token,{
        maxAge: 30 * 24*60*60*100,//MS
        httpOnly:true,//prevent cross-site scripting attacks
        sameSite:"strict",//prevent CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_env !=="development"
    })
};
export default  generateTokenAndSetCookie;