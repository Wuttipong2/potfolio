const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000; 


const app = express();


//app.get('/profile', (req, res) =>{
 // res.send("<h1>my Portfolio</h1>");
//});
 
//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname,'public')));


app.use('/profile', router);

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  
