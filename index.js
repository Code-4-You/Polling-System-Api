const express = require('express')
const mongoose=require('mongoose')
const app = express();
// const connectWithDb = require('./config/mongoose');
const db = require('./config/mongoose')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

const DB="mongodb+srv://SanskarGupta:pollingapi@cluster0.9rjynxw.mongodb.net/SanskarGupta?retryWrites=true&w=majority"

mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false,
  

}).then(()=>{
  console.log('Communication Successful');
}).catch((err)=>console.log('Error here',err));


// connect with database
// connectWithDb();



app.use('/', require('./routes'));


app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at ${PORT}`);
});