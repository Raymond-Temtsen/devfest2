const express = require('express');
const app = express();

app.get('/',(req,res)=>{ 
res.send('Hello World, This Is Our Application')});

const port = 4000;

app.listen(port, ()=>{console.log(`
server is currently listening at port ${port}
`)})