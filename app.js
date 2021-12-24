const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./configs/constants/auth');
const login = require('./routes/login');
const user = require('./routes/user');
const project = require('./routes/projects');
const timer = require('./routes/timer');
const app = express();

// Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(bodyParser.json())


// Routes
app.use('/login',login);
app.use('/user',user);
app.use('/project',project)
app.use('/timer',timer)



app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}
=> http://localhost:${PORT}`))