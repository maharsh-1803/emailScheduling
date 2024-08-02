const User = require("../model/user.model");
const bcrypt = require('bcrypt');
const generateToken = require("../token/generateToken");

const registerUser = async(req,res) => {
    try {
        const { name,email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hash
        });
        await newUser.save();
        newUser.password = undefined;
        return res.status(200).json({
            success: true,
            message: "User inserted successfully",
            user: newUser
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const loginUser = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const decodedPassword = await bcrypt.compare(password, user.password);
        if (!decodedPassword) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        const token = await generateToken({ _id: user.id });
        return res.status(200).json({
            message: "User login successfully",
            token: token.token
        });
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    registerUser,
    loginUser
}