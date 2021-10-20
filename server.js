const express = require('express')
const connectDB = require('./config/connectDB')

const authRouter = require('./Routes/Auth');

const movieRoute = require("./Routes/Movies");


const app = express()
connectDB()

//middleware
app.use(express.json())
//use Routes
app.use("/api/auth", authRouter)
// movie Routes
app.use("/api/movies", movieRoute);


const PORT = process.env.PORT || 6000
app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log(`server is running on port ${PORT}`)
})