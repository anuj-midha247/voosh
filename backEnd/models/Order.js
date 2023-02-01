import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    sub_total: {
        type: Number,
        required: true,
    },
    phone_number: {
        type: Number,
        required:true,
    },
    
})
export default mongoose.model("Order", orderSchema);