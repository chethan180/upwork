import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Apply from "./routes/apply.js";
import Auth from './routes/auth.js';
import Fetch from './routes/fetch.js';
import Mail from './routes/mail.js';

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

let user = process.env.SECRET_MONGO_USER;
let pswrd = process.env.SECRET_MONGO_PSWD;

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
 });
 
 transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });
 

 

 app.post("/send", function (req, res) {
  let mailOptions = {
    from: "test@gmail.com",
    to: "chyten9@gmail.com",
    subject: "Nodemailer API",
    text: "Hi from your nodemailer API",
  };
 
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
 });

app.use('/apply',Apply);
app.use('/auth',Auth);
app.use('/fetch',Fetch);
app.use('/mail',Mail);

const CONNECTION_URL = `mongodb+srv://${user}:${pswrd}@cluster0.p6xod.mongodb.net/Upwork?retryWrites=true&w=majority`;
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);