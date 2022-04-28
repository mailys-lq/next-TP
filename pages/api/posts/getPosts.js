import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    
    const posts = await prisma.post.findMany();

    res.status(200).json({ posts });

}