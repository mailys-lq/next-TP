import prisma from "../../../lib/prisma.ts";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
    const data = req.body;
    try {        
        const tokenVerify = jwt.verify(data.token, 'user.id');


        const team = await prisma.team.create({
            data: {
                ...data,
            }
        })
        console.log(team)
        res.status(200).json({ team });
    } catch (err) {
        res.status(403).json({ err: "Erreur dans la création d'une team" });
    }
}