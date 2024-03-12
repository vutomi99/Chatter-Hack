import Conversation from '../models/conversation.model.js';
import Message from '../models/massage.model.js';

export const sendMessage = async(req,res)=>{
 
    try {
        const{message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id

        //find the conversation between the users 
       let conversation = await  Conversation.findOne({
            participants: {$all:[senderId,receiverId]},
        })
        //if there is no conversation create one(initial conversation)
        if(!conversation){
             conversation = await Conversation.create({
                participants:[senderId,receiverId ],
             })
        }

        //create a new message 
        const newMessage = new Message({

            senderId,
            receiverId,
            message,
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();
        await newMessage.save();
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in send message controller: ",error.message)
        res.status(500).json({error:"Internal server Error"});
    }
};

export const getMessages = async(req,res)=>{
    try {
        
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all:[senderId,userToChatId]},

        }).populate("messages");//Actual message 

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("error in get messages controller: ",error.message)
        res.status(500).json({error:"Internal server Error"});
    }
}