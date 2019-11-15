const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../jokes/users-model');

const { validateUser } = require('../jokes/users-helpers');

router.post('/register', (req, res) => {
  let user = req.body;

  const validateResult = validateUser(user)

  if(validateResult.isSuccessful === true){
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  } else {
    res.status(400).json({
      message: 'invalid information',
      errors: validateResult.errors
    })
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  .first()
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)){
      //produce token
      const token = getJwtToken(user.username);
      //send token to the client
      res.status(200).json({
        message: `Welcome ${user.username}, all your database are belong to us`,
        token //return token
      });
    } else {
      res.status(401).json({ message: "invalid creds"});
    }
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

router.get('/logout', (req, res) => {
  if(req.token){
    req.token.destroy(err => {
      if(err){
        res.status(500).json({ message: "you can check out anytime you like but you can never leave..."})
      } else {
        res.status(200).json({ message: 'logged out!'})
      }
    });
  } else {
    res.status(200).json({ message: 'bye felicia!'})
  }
})

function getJwtToken(username){
  //make sure no one modifies token
  const payload = {
    username,
    role: 'user'
  }

  const secret = process.env.JWT_SECRET || 'is it secret?';
  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, secret, options);
}

module.exports = router;
