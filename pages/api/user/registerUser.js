import prisma from "../../../lib/prisma.ts";

const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


export default async (req, res) => {
    const data = req.body;
    data.password = bcrypt.hashSync(data.password, 8);

    const checkIfEmailExist = await prisma.user.findUnique({where:{email: req.body.email} });
    if(checkIfEmailExist) return res.status(400).json({err: 'Email already exist' });
    
    try {
        const user = await prisma.user.create({
            data: {
                ...data,
            },
        });
        const token = jwt.sign({user: {
            email: data.email
        }}, process.env.JWT_KEY);

        jwt.verify(token, process.env.JWT_KEY)

        res.status(200).json({ user, token });
    } catch (err) {
        res.status(403).json({ err: "Error occured while adding a new user" });
    }
};
