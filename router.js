const exspress=require('express');
const controller=require('./controller.js')
const router=exspress.Router();

router.get('/',controller.anasayfa);
router.get('/login',controller.login);
router.get('/kediler',controller.kediler);

module.exports=router;