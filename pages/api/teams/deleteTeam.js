import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        console.log('coucou')
        const deleteTeam = await prisma.team.delete({
            where: {
              id: data.id,
            },
          })
        console.log(deleteTeam)
        res.status(200).json({ deleteTeam });
    } catch (err) {
        res.status(403).json({ err: "Erreur dans la suppression de la team" });
    }
}