require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/workouts')
const cors = require("cors");

const app = express();


// middleware
const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

//routes
app.use('/api/workouts', router);

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listening for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & App running on port " + process.env.PORT);
      })
  })
  .catch((error) =>{
    console.log(error);
  })