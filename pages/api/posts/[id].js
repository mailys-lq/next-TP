import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    try {

    const { id } = req.query;

    const result = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        },
    });



    res.status(200).json(result);

    } catch (err) {
        res.status(403).json({err:'Erreur post id'})

    }
    


}