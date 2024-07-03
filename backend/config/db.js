import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://aditya0102be21:2110990102@cluster0.yftkpjy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`Connected to Mongodb Database  ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

export default connectDB;