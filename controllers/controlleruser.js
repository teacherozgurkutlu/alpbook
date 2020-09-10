const path=require('path');
const bcrypt=require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

module.exports.login=function(req,res){
   
    //res.sendFile(path.join(__dirname, '../public', 'kedi.html'));
    //res.render('sablon',{mesaj:"Merhaba kedi"});
    res.render('login');
    
};
module.exports.register=function(req,res){
   
    //res.sendFile(path.join(__dirname, '../public', 'kedi.html'));
    //res.render('sablon',{mesaj:"Merhaba kedi"});
    res.render('register');
    
};
module.exports.regpost=function(req,res){
   
    //console.log(req.body);
    const { name,email,password,password2 }=req.body;
    let errors=[];
    if(!name||!email||!password||!password2)
    {
        errors.push({msg:'Lütfen tüm alanları doldurunuz'});
    }
    if(password !== password2)
    {
        errors.push({msg:'Şifreler uyuşmuyor'});
    }
    if(password.length < 6)
    {
        errors.push({msg:'Şifre en az 6 karakter uzunluğunda olmalı'});
    }
    if(errors.length>0)
    {
       res.render('register', {
           errors,
           name,
           email,
           password,
           password2

       });
    } else {
        User.findOne({ email: email })
        .then(user => {
            if (user) {
                errors.push({ msg: 'Email already exists' });
                res.render('register', {
                  errors,
                  name,
                  email,
                  password,
                  password2
                });
            }
            else
            {
                const newUser = new User({
                    name,
                    email,
                    password
                  });
                  

                  bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser
                        .save()
                        .then(user => {
                          req.flash(
                            'success_msg',
                            'You are now registered and can log in'
                          );
                          res.redirect('/user/login');
                        })
                        .catch(err => console.log(err));
                    });
                  });
            }

        });
}
    
};
// Login
module.exports.logpost=function(req, res, next)  {
    passport.authenticate('local', {
      successRedirect: '/kedi',
      failureRedirect: '/user/login',
      failureFlash: true
    })(req, res,next);
};
  
  // Logout
  module.exports.logout=function (req, res)  {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/user/login');
  };
  module.exports.kedi=function(req,res){
   
    //res.sendFile(path.join(__dirname, '../public', 'kedi.html'));
    //res.render('sablon',{mesaj:"Merhaba kedi"});
    res.render('kedi');
    
};