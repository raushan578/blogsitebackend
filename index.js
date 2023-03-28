const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv").config();


const PORT= process.env.PORT || 5000;
require('./router/db/data')

let app = express(); 
app.use(express.json());
app.use(cors());
 app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(require('./router/Auth'));

    app.listen(PORT, ()=>{
    console.log(`App listening at ${PORT}`); 
})  
