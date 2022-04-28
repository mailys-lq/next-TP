import prisma from "../../../lib/prisma.ts";

const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


export default async (req, res) => {
    const data = req.body;
    data.password = bcrypt.hashSync(data.password, 8);
    console.log('1')
    const checkIfEmailExist = await prisma.user.findUnique({where:{email: req.body.email} });
    if(checkIfEmailExist) return res.status(400).json({err: 'Email already exist' });
    
    try {
        console.log('2')
        const user = await prisma.user.create({
            data: {
                ...data,
            },
        });
        console.log('3')
        const token = jwt.sign({user: {
            email: data.email
        }}, process.env.JWT_KEY);
        console.log('4')
        const test = jwt.verify(token, process.env.JWT_KEY)
        console.log(test);
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(403).json({ err: "Error occured while adding a new user" });
    }
};
