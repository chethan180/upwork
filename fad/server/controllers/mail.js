import nodemailer from 'nodemailer';
import generatePDF from './pdf.js';
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import fs from 'fs';
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
      : console.log(`=== hi the Server is ready to take messages: ${success} ===`);
   });
   
  
   
  
   export const maile =  (req, res)=> {
       console.log("hi" ,req.body);
       const xkad = [];
       xkad.push(req.body);
      const gopi = req.body.Email;
      console.log(gopi);

       const doc = new jsPDF();
  console.log(xkad);

  // define the columns we want and their titles
  const tableColumn = ["Email","DOB","Contact","Age","Name","Occupation","Hobbies"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  xkad.forEach(ticket => {
    const ticketData = [
      ticket.Name,
      ticket.DOB,
      ticket.Email,
      ticket.Contact,
      ticket.Age,
      ticket.Occupation,
      ticket.Hobbies,


      // called date-fns to format the date on the ticket
      // format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Details", 14, 15);

  doc.save(`Details_${dateStr}.pdf`)
//  fs.readFile(doc ,function(err,data){



    console.log("hi" , gopi);
    let mailOptions = {
      from: "test@gmail.com",
      to: gopi,
      subject: "Nodemailer API",
      text: "cd",
      attachments: [{
        filename:`Details_${dateStr}.pdf`,
        path:`./Details_${dateStr}.pdf`,
        contentType: 'application/pdf'
      }],
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
        res.json({ status: "Email sent" });
      }
    });

  // });
   };
