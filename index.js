const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server Çalışıyor port $ {port}');
});

app.use(express.static('public'));

const router=require('./router');
app.use('/',router);

/*
app.get('/',function(req,res){
   
    res.sendFile(path.join(__dirname, './public', 'anasayfa.html'));
    
});
app.get('/login',function(req,res){
   
    res.sendFile(path.join(__dirname, './public', 'login.html'));
    
});
app.get('/kediler',function(req,res){
   
    res.sendFile(path.join(__dirname, 'kediler.html'));
    
});
*/












 
