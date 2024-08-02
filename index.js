const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT;
const mongoose = require('mongoose')
const userRoute = require('./routes/user.route')
const mailRoute = require('./routes/mailSchedule.route')

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on ${PORT}`)
})

app.use(express.json())

app.use('/api/User',userRoute)
app.use('/api/Schedule',mailRoute)