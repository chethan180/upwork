import { signin } from "../controllers/auth.js";
import express from 'express';

const Auth = express.Router();
Auth.post('/',signin);

export default Auth;
