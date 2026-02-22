import mongoose from "mongoose";

const subscriberSchema=mongoose.Schema({
    email:{type:String}
});

const subscriberModel=mongoose.models.subscriber || mongoose.model("subscriber",subscriberSchema);

export default subscriberModel;