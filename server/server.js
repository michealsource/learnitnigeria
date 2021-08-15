require("dotenv").config()
const path = require('path');
const express = require('express');
const mongoose = require("mongoose")
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const studentRecord = require("../model")

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
   console.log("Successfully connected to db")
})

app.use(express.static(publicPath));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/register', async(req, res) => {
   const data = req.body;
   const response = await studentRecord.create({...data})
   if(response){
      return res.send("Enrollment was successful")
   }else{
      return res.send("Error with enrollement, please try again later.")
   }
});

app.get('/applicants', (req, res) => {
   studentRecord.find({}).exec((err, response) => {
      if(response){
         return res.json(response)
      }else{
         return res.send("Error fetching applicants.")
      }
   }) 
});

app.listen(port, () => {
   console.log('Server is up!');
});