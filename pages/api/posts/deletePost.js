import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    const data = req.body;
    console.log('coucou1')
    console.log(req)
    try {
        console.log('coucou')
        console.log(data)
        const deletePost = await prisma.post.delete({
            where: {
              id: data.id,
            },
          })
        console.log(deletePost)
        res.status(200).json({ deletePost });
    } catch (err) {
        res.status(403).json({ err: "Erreur dans la suppression du post" });
    }
}