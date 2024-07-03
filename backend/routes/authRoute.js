import express from 'express'
import { registerController,loginController,testController } from '../controllers/authController.js'

import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';
//router object
const router = express.Router()

//routing



// Register || Method Post
router.post('/register',registerController);
// Login || post 
router.post('/login',loginController);

// test route
router.get('/test',requireSignIn,isAdmin,testController);

// protected route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok: true});
})


router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok: true});
})



export default router;