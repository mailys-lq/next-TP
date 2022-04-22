import prisma from "../../../lib/prisma.ts";

const jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");

export default async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    console.log("coucou1")
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

    console.log("coucou2")
    
    if (!user) {
      console.log('coucou4')
      res.status(400).send('Invalid Email.')
    } else {
      console.log('coucou5')

      console.log(data.password, user.password)

      const validPassword = await bcrypt.compare(data.password, user.password);
      if (!validPassword) {
        return res.status(400).send('Invalid Password.')
      } else {
         console.log(user);   
        const token = jwt.sign({user:{
          id: user.id,
          email: user.email
        }}, process.env.JWT_KEY);

        
        
        console.log(token)

        return res.status(200).send({token, user})
      }
    }
  } catch (err) {
    res.status(403).json({ err: "Problème lors de la connexion" });
  }

};