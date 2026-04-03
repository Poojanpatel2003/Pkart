import express from 'express';
import { register,reVerify,verify } from '../controllers/userController.js';

const router=express.Router()

router.post('/register',register)
router.post('/verify',verify)
router.post('/reVerify',reVerify)

export default router