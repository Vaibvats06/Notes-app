import jwt from 'jsonwebtoken'
const getToken=async(userId)=>{
    try {
        const token=await jwt.sign({"token":userId},process.env.JWT_SECRET,{"expiresIn":"7d"})
        return token;
        
    } catch (error) {
        console.log("Error in token generation : ",error)
        
    }
    

}

export default getToken;