const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://phucne:ahihi123hihi@cluster0.mi4jjzj.mongodb.net/?retryWrites=true&w=majority", ()=> {
  console.log('connected to mongodb')
})
