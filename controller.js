const path=require('path');

module.exports.anasayfa=function(req,res){
   
    res.sendFile(path.join(__dirname, './public', 'anasayfa.html'));
    
};
module.exports.login=function(req,res){
   
    res.sendFile(path.join(__dirname, './public', 'login.html'));
    
};
module.exports.kediler=function(req,res){
   
    res.sendFile(path.join(__dirname, 'kediler.html'));
    
};