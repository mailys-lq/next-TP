import prisma from "../../../lib/prisma.ts";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
    const data = req.body;
    console.log(data)
    console.log(data.token)
    try {        
        const tokenVerify = jwt.verify(data.token, 'user.id');
        
        console.log(tokenVerify)

        console.log('coucou1')


        const post = await prisma.post.create({
            data: {
                ...data,
                
            }
        })
        console.log(post)
        res.status(200).json({ post });
    } catch (err) {
        res.status(403).json({ err: "Error occured while adding a new user" });
    }
}