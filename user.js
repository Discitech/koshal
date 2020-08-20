const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const auth = require('./auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config')

router.post('/', (req,res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({ email })
    .then(user => { 
        if(user) return res.status(400).json({msg: 'User already exists'});

        const newUser = new User({
            name,
            email,
            password
        });

        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) =>{
                if(err) throw err;

                newUser.password = hash;
                newUser.save()
                .then(user => {
                    jwt.sign({ id:user._id }, SECRET, {expiresIn: 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.status(200).json({
                            token,
                            user:{
                                id: user.id,
                                name: user.name,
                                email: user.email       
                            }
                        });
                    })
                })
            })
        })
    })
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) throw Error('User Does not exist');
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('Invalid credentials');
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
      if (!token) throw Error('Couldnt sign the token');
  
      res.status(200).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

module.exports = router;
