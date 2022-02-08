const express =  require('express');
//import {path} from 'path';

const app = express(); 

app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.sendFile("index.html");
})

app.listen(3000, ()=> console.log("Wordle is listening at port 3000..."))