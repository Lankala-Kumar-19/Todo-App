require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./src/config/db') 
const userRoutes = require('./src/routes/userRoutes')
const taskRoutes = require("./src/routes/taskRoutes");


const port = process.env.PORT;


app.use(express.json())
app.use("/users",userRoutes);
app.use("/tasks", taskRoutes);

const startServer = async()=>{
    await connectDB();
    app.listen(port,()=>{
        console.log(`server running on port ${port}`);
    })
};

startServer();