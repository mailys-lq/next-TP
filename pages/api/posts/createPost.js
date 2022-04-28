import prisma from "../../../lib/prisma.ts";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
    const data = req.body;
    console.log(data)
    console.log(data.token)
    try {        

        const tokenVerify = jwt.verify(data.token, process.env.JWT_KEY);
        req.userId = tokenVerify.user.id;
        console.log(req.userId)

        console.log('coucou1')


        const post = await prisma.post.create({
            data: {
                title: data.title,
                description: data.description,
                authorId: req.userId
            }
        })
        console.log(post)
        res.status(200).json({ post });
    } catch (err) {
        res.status(403).json({ err: "Error occured while adding a new user" });
    }
}