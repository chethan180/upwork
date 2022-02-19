import express from "express";
import { maile } from "../controllers/mail.js";

const Mail = express.Router();
Mail.post('/' , maile);

export default Mail;