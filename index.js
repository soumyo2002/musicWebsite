const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))

const port=process.env.PORT || 5500

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/request-music');
var db=mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.use(express.static(__dirname + '/css'));

app.get('/public/request.html',(req,res)=>{
    res.sendFile(__dirname + '/request.html')
})

app.get('/public/request_success.html',(req,res)=>{
    res.sendFile(__dirname + '/request_success.html')
})
app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post("/public/request.html",(req,res)=>{
    console.log("redirected");
    var name=req.body.txtName;
    var email=req.body.txtEmail;
    var phno=req.body.txtPhone;
    var mssg=req.body.txtMsg;

    var data={
        "name":name,
        "email":email,
        "phno":phno,
        "mssg":mssg
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('request_success.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(port);

console.log("Listening on port ",port);