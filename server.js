const express =require("express")
const router =require("./routes/route")
const bodyParser =require("body-parser");
const { default: mongoose } = require("mongoose");
const app =express()
const port =3000;
app.use(express.json())
//router
app.use(router)
bodyParser.urlencoded({extended:true})
app.use(bodyParser.json())
//database
mongoose.connect("https://127.0.0.1/user").then(()=>{
    //listen app in port 3000
    app.listen(port,()=>{console.log("run in port 3000") })
}).catch((err)=>{
console.log(err + "error")
})





