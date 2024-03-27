import prisma from "../prisma/client.js"
export const singup = async (req,res) =>{
    try {
        const {name , email, password} = req.body;
    const newUser = await prisma.user.create({
        data:{name ,email,password}
    })

    console.log(newUser,"user is created successfully")
    return res.json(newUser).status(200);
    } catch (error) {
        return res.json(error.message).status(400)
    }
};

export const getall = async(req ,res) =>{
    try {
        const gell = await prisma.user.findMany();
        res.json(gell).status(200)
    } catch (error) {
        return res.json(error.message).status(400)
    }
}


