const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send("JAI SHREE RAM \n RADHE RADHE");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});