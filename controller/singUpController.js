import prisma from "../prisma/client.js"
export const singup = async (req,res) =>{
    try {
        const {name , email, password} = req.body;
    const newUser = await prisma.user.create({
        data:{name ,email,password}
    })

    return res.json(newUser).status(200);
    } catch (error) {
        return res.json(error.message).status(400)
    }
};