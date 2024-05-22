const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express ()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require("./routes/Index")


const PORT=80


//connect db

const uri = "mongodb://localhost:27017"

mongoose.connect(uri,{
    dbName:"Complain-forum",
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});



//middle ware
app.use(bodyParser.json({limit:"50mb"}))

app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))


//cors
app.use((req,res,next)=>{
    req.headers("Access_Control-Allow-Origin", "*")
    req.headers("Access-Control-Allow-Headers", "*")
    next()
})


//routes

app.use("/api", router)
  




app.use("/uploads", express.static(path.join(__dirname,"/../uploads")))
app.use("/uploads", express.static(path.join(__dirname,"/../complain-forum/build")))


app.get("*", (req,res)=>{
    try{

        res.sendFile(path.join(`${__dirname}/../complain-forum/buil/indexedDB.html`))

    }catch(e){
        res.send("Oops Unexpected Error")


    }
})

app.use(cors())

//server listening
app.listen(process.env.PORT || 80, ()=>{
    console.log(`Listening on port no ${PORT}`)
})


