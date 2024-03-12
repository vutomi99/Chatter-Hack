

export const sendMessage = async(req,res)=>{
 
    try {
        const{message} = req.body;
        const {id} = req.params.id;
        const senderId = req.userId
    } catch (error) {
        console.log("error in send message controller: ",error.message)
        res.status(500).json({error:"Internal server Error"});
    }
}