//! เรียกใช้งาน Library Express
const express = require("express");
const app = express();

//! Base Variable
const port = 8000;

app.get('/',(req,res) => {
    res.send('<h1>Hello World</h1>')
})

//! Run Server ที่ Port 800
app.listen(port,() => {
    console.log(`Server Running > http://localhost:${port}`)
})