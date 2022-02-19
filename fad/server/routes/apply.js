import express from "express";
import { applye } from "../controllers/apply.js";

const Apply = express.Router();
Apply.post('/' , applye);

export default Apply;