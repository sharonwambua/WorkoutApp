require("dotenv").config()
const express = require ('express')
const workoutRoutes=require("./routes/workout.routes")
const mongoose=require('mongoose')
const cors =require("cors")
const app = express()

const port=process.env.PORT



//middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next)=>{
    console.log(req.method, req.path)
    next()
})

//routes
app.use("/api/workout" , workoutRoutes)

//connecting to database
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(port, ()=>{
        console.log("Connected to Db and server is running on port " + port)
    })
})
.catch((err)=>{
    console.error(err)
    console.error("error connecting to database")
})


