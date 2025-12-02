import User from '../models/user.model.js';
export async function findUser(req, res){
    console.log("find user controller called");
    const userId=req.userId;
    const user=await User.findById(userId).select('-password').select('-__v');
    res.status(200).json(user);

}