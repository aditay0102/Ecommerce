import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import cors from 'cors';
// configure env
dotenv.config();
const app = express()



// Port
const Port =  8000;

// listen the request
app.listen(Port,()=> {
    console.log(` Server is running at ${Port}`)
})
// database connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


// routes
app.use("/api/v1/auth",authRoutes);
app.use('/api/v1/category',categoryRoutes);


app.get('/',(req,res) => {
    res.send({
        message: 'Welcome to ecommer app'
    })
})




