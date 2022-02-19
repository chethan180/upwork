import express from "express";
import { fetche } from "../controllers/fetch.js";

const Fetch = express.Router();
Fetch.post('/' , fetche);

export default Fetch;