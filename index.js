const express =  require('express');
//import {path} from 'path';

const app = express(); 

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.sendFile("index.html");
})

app.listen(port, ()=> console.log(`Wordle is listening at port ${port}...`))