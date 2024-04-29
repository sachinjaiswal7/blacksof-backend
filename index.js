import express, { urlencoded } from "express";
import { json } from "sequelize";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const array = [];

app.post("/joinWaitlist",(req,res) => {
  const {name,email,mobile,message} = req.body;
  array.push({
    name,
    email,
    mobile,
    message
  })
  res.status(201).json({
    message : "Info Added Successfully",
    success : true
  })
})

app.get("/getWaitlist",(req,res) => {
  res.status(200).json({
    data : array,
    message : "Info Retrieved Successfully",
    success : true
  })
})

app.listen(4000,() => {
  console.log("code is running on the port 4000");
})