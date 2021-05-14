// /*set up the server: server runs by command 'node server.js' */
// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();

// //middleware
// app.use(express.json());
// app.use(cors());


// /*
// set up NodeMailer: 
// 3 steps
//     1. A transporter object
//     2. A mailOption object
//     3. A sendMail method
// */

// /* 
// 1. set up the transporter object: user, and pass are own email and password(use .env file to store variables)
// Everything else will be getting as soon as set up of OAuth2 
// */
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         pass: process.env.WORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     },
// })

// /*
// 2. verify the transporter
// */
// transporter.verify((err, success) => {
//     err
//      ? console.log(err)
//      : console.log(`=== Server is ready to take messages: ${success} ===`);
// });


// create a text 'mailOption' object
// let mailOptions = {
//     from: "test@gmail.com",
//     to: process.env.EMAIL,
//     subject: "Nodemailer API",
//     text: "Hi from your nodemailer API",
// };
// // Send the 'mailOption through transporter'
// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log("Error" + err);
//     } else {
//         console.log("Email sent successfully");
//     }
// });

// app.post("/send", function (req, res) {
//  let mailOptions = {
//    from: "test@gmail.com",
//    to: process.env.EMAIL,
//    subject: "Nodemailer API",
//    text: "Hi from your nodemailer API",
//  };

//  transporter.sendMail(mailOptions, function (err, data) {
//    if (err) {
//      console.log("Error " + err);
//    } else {
//      console.log("Email sent successfully");
//      res.json({ status: "Email sent" });
//    }
//  });
// });




// app.post("/send", function(req, res) {
//     console.log("server.js")
//     let mailOptions = {
//     from: `${req.body.data.email}`,
//     to: process.env.EMAIL,
//     subject: `Message from: ${req.body.data.email}`,
//     text: `${req.body.data.message}`,
// };
//     transporter.sendMail(mailOptions, function(err, data) {
//         if (err) {
//             res.json({
//                 status: "fail",
//             });
//             // console.log("Error" + err);
//         } else {
//             // console.log("Email sent successfully");
//             console.log("=== Message sent ===");
//             res.json({ 
//                 status: "success" 
//             });
//         }
//     });
// });


// const port = 3001;
// app.listen(port, () => {
//  console.log(`Server is running on port: ${port}`);
// });



