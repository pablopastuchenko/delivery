import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://pablopastuchenko73:40028922@cluster0.jaylhnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"))
}