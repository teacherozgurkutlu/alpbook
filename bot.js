const express=require('express');
const app=express();
const bodyParser=require('body-parser')
//const _=require('underscore');
require('dotenv').config();
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server Çalışıyor port $ {port}');
});
var urlencodedParser=bodyParser.urlencoded({ extended:false });

app.use(express.json({limit:'1mb'}));
app.use(express.static('public'));






app.get("/a",function(req,res){
    res.send("get işlemi başarılı");
    res.end();
   

})


app.post("/gonder",urlencodedParser, function (req, res)  {
    //res.send('Wiki home page');
    console.log(req.body.fyas);
    res.end();
   
  })

 
