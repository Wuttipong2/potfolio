const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');


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
    3000,
    () => {
        console.log("Listening to port 3000");
    }
);