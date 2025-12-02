import jwt from 'jsonwebtoken'
const isauth = async(req,res,next) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.status(400).json({"message":"please login first"})
    }
    const userId=await jwt.verify(token,process.env.JWT_SECRET)
    if(!userId){
        return res.status(400).json({"message":"please login first"})
    }
    req.userId=userId.token;
    next();
    
  } catch (error) {
    console.log(error)
  }
}

export default isauth