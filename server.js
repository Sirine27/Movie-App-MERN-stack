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
//deploy
if(process.env.NODE_ENV === "production") {
    //set static folder
    //All the js and css files will be read and served from this folder
    app.use(express.static("frontend/build"))

    //index.html for all page routes
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, "build", "index.html"))
    })
}
app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log(`server is running on port ${PORT}`)
})