const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const {MONGOURI} = require('./config');
const passport = require('passport');
const cookieSession = require('cookie-session');

const user = require('./routes/user.js');
const contact = require('./routes/mail');
const authRoutes = require('./routes/auth-routes.js');
require('./passportjs/passport')(passport);
const passportSetGoogle = require('./passportjs/passport-google-setup');

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("conneted to MongoDb");
});
mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to database",err);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: ['edkfbguyherbuhfbhirbhfibnhei']
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', user);
app.use('/auth',authRoutes);
app.use('/mail', contact);

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
});
