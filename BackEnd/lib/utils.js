//This will be used in another file to generate token.

import jwt from "jsonwebtoken"

export const generateToken=(userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET)

    return token
}