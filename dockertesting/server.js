var express=require('express');
var app=express();
var path=require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
})

app.get('/about',function(req,res){
    res.send("<h1>about</h1>")
})

app.listen(3000,function(){
    console.log("listening at port 3000")
})