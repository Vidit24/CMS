const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));
//set a view engine
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

//load routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');

//use routes
app.use('/',home);
app.use('/admin',admin);


app.listen(4500,()=>{
    console.log(`listening on port 4500`);
});