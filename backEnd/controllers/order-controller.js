import jwt from "jsonwebtoken";
import Order from "../models/Order";
export const addOrder = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];
    
    if (!extractedToken && extractedToken.trim() === "") {
        return res.status(404).json({ message: "Token Not Found" });
    }
    let userId;
    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
        if (err) {
            return res.status(400).json({ message: `err.message` });
        } else {
            userId = decrypted.id;
            return 
        }
    })
    const { sub_total, phone_number } = req.body;
    let order;
    try {
        order = new Order({ sub_total, phone_number });
        order = await order.save();
    } catch (error) {
        return console.log(error);
    }
    if (!order) {
        return res.status(500).json({ message: "Request Failed" });
    }
    return res.status(201).json({ order });
}
export const getAllOrders = async (req, res, next) => {
    let orders;
    try {
        orders = await Order.find();
    }
    catch (err) {
        return console.log(err);
    }
    if (!orders) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ orders }); 
}