const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('App is Working....')
})

app.listen(5000,()=>{
    console.log(`Server is working on 5000`);
})