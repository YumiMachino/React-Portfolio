/*set up the server: server runs by command 'node server.js' */

const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

/*
set up NodeMailer: 
3 steps
    1. A transporter object
    2. A mailOption object
    3. A sendMail method
*/

/* 
1. set up the transporter object: user, and pass are own email and password(use .env file to store variables)
Everything else will be getting as soon as set up of OAuth2 
*/
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
})

/*
2. verify the transporter
*/
transporter.verify((err, success) => {
    err
     ? console.log(err)
     : console.log(`=== Server is ready to take messages: ${success} ===`);
});

// create a text 'mailOption' object
let mailOptions = {
    from: "test@gmail.com",
    to: process.env.EMAIL,
    subject: "Nodemailer API",
    text: "Hi from your nodemailer API",
};

// Send the 'mailOption through transporter'
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error" + err);
    } else {
        console.log("Email sent successfully");
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})


