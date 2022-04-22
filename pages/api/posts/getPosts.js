import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    
    const posts = await prisma.post.findMany();

    posts.forEach(post => {
        const author = await prisma.user.findUnique({
            where: {
              id: post.authorId,
            },
            select: {
                name: true,
            }
        });
    });
    res.status(200).json({ posts, author });

}