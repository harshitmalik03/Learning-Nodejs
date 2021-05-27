const express = require('express');
const app = express();

app.get('/get',(req,res)=>{
    res.send("Helloo World")
})
app.listen(8000, ()=>{
    console.log('Our first server is running on 8000')
});