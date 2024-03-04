const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');


const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require("./controllers/errors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));


//Routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

app.listen(3001);
console.log("Listening port on http://localhost:3000");