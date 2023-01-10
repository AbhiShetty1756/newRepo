var express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({extended:false}));


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/public/index.html"));
    // res.send("hello");
})

app.post('/info',function(req,res){
    res.send(req.body.txt);
})

app.get('/about',function(req,res){
    res.send("<h1>about</h1>")
})

app.listen(3000);
console.log("running at 8081");