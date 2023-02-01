import express from "express";
import { addOrder, getAllOrders } from "../controllers/order-controller";

const orderRouter = express.Router();
orderRouter.post("/add-order", addOrder);
orderRouter.get("/get-order",getAllOrders)

export default orderRouter;