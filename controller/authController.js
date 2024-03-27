import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
import prisma from "../prisma/client.js";

export const singup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Generate a salt value
    const salt = bcrypt.genSaltSync(10);
    // Hash the password using the salt
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    console.log(newUser.password, "user is created successfully");
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};


export const singin = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const validUser = await prisma.user.findUnique({ where: { email } });
        if (!validUser) return res.status(404).json("User not found");
        
        const validPassword = await bcrypt.compare(password, validUser.password);
        if (!validPassword) return res.status(404).json("Invalid password");

        // Create a JWT token with the user ID in the payload
        const token = Jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
        
        // Sending response without including the password
        const { password: pass, ...rest } = validUser;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({ id: validUser.id, ...rest });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}



export const getall = async (req, res) => {
  try {
    const gell = await prisma.user.findMany();
    return res.status(200).json(gell);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
