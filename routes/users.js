const exspress=require('express');
const controller=require('../controllers/controlleruser.js')
const router=exspress.Router();


router.get('/login',controller.login);
router.get('/register',controller.register);
router.post('/register',controller.regpost);
router.post('/login',controller.logpost);
router.get('/logout',controller.logout);
router.get('/kedi',controller.kedi);
module.exports=router;