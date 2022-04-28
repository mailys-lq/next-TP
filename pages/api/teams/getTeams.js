import prisma from "../../../lib/prisma.ts";

export default async (req, res) => {
    
    const teams = await prisma.team.findMany();

    res.status(200).json({ teams });

}