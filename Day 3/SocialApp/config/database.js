const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
    mongoose
    .connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch((error)=>{
        console.log("Received Database Connection Error" + error.message);
        process.exit(1);
    })
}
module.exports = dbConnect;