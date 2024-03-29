import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import prisma from "../prisma/client.js";

export const singup = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req.body)
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
      next(error)
  }
};


export const singin = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const validUser = await prisma.user.findUnique({ where: { email } });
        if (!validUser) return next(errorHandler(401, 'user not found'));
        
        const validPassword = await bcrypt.compare(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'wrong password'));

        // Create a JWT token with the user ID in the payload
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        
        // Sending response without including the password
        const { password:hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res
          .cookie("access_token", token, { httpOnly: true,expires:expiryDate })
          .status(200)
          .json(rest);
    } catch (error) {
      next(error)
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
