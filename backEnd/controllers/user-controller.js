import User from "../models/User"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }
    catch (err) {
        return console.log(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ users }); 
}

export const signup = async(req,res,next)=> {
    const { name, phone, password } = req.body;
    if (!name && name.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, phone, password:hashedPassword });
        user = await user.save();
    } catch (error) {
        return console.log(error);;
    }
    if (!user) {
        return res.status(500).json({ message: "Uexpected Error Occured" });
    }
    return res.status(201).json({ user });
}

export const login = async (req, res, next) => {
    const {phone, password } = req.body;
    if ( !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    let existingUser;
    try {
        existingUser = await User.findOne({ phone });
    } catch (error) {
        return console.log(error);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "Unable To find User" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Password Incorrect" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });

    return res.status(200).json({ message: "login successful",token,id:existingUser._id });
}