import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        console.log('coucou')
        const deleteUser = await prisma.post.delete({
            where: {
              id: data.id,
            },
          })
        console.log(deleteUser)
        res.status(200).json({ deleteUser });
    } catch (err) {
        res.status(403).json({ err: "Error occured while adding a new user" });
    }
}