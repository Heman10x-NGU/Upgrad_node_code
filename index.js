const express = require("express")
var bodyParser = require("body-parser")
const app = express()
const port = 3000



app.use(bodyParser.json());

function calculateSum(counter){
  let sum = 0;
  for(let i=0;i<=counter;i++){
    sum = sum+i;
  }
  return sum;
}


function secondhandle(req,res){
  // let num=req.query.counter;
  //let num=req.headers.counter;
  let num=req.body.counter;
  let number=calculateSum(num);
  let answer="the sum is " + number;
  res.send(answer);
}

function handleFirst(req,res){
  res.send("your express server started");
}


function givePage(req,res){
    res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
  
            <title>Hemant</title>
            </head>
            <body>
              <h1>Your Page has been RTeturned</h1>
            </body>
            </html>`);
    //strings can be sent only in 1 line
    //if multiple line output then use backticks
}
app.get("/",handleFirst);
app.get("/handleSum",secondhandle);
app.get("/give",givePage);

function started(){
  console.log("your server has been started on port 3000");
}
app.listen(port,started);