const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

// for email
// post middleware
fileSchema.post("save", async function (doc) {
  // doc--> it refers to data entry of our DB
  try {
    console.log("DOC :", doc);

    // transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // this function must be written in config.js good practice
    // send mail
    let info = await transporter.sendMail({
      from: "Jay the Great",
      to: doc.email,
      subject: "regarding placement",
      html: `<h2> Hello sir/mam </h2> <p>Data Uploading</p> View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a>`,
    });
    console.log("INFO :",info);
  } catch (error) {
    console.log(error);
  }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
