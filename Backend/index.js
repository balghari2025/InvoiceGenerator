const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
app.get(`/shoaib`,(req,res)=>{
    res.send(`ahmed`)
});
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})