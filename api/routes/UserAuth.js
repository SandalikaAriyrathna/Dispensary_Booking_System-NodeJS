const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sendTokenResponse = async (res, user, message) => {
  const accessToken = generateToken(user);

  res.status(200).json({
    data: { user, access_token: accessToken },
    message,
  });
};

const generateToken = (user) => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET || 'jsecret', {
    expiresIn: `3d`,
  });
};

const decodeJwtToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'jsecret');
};

//Register
router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
    password: hashedPass,
    profile_pic: req.body.profile_pic,
  });
  try {
    const usercount = await User.count();
    newUser.user_id = 'U00' + (parseInt(usercount) + 1);
    try {
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    console.log(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(req.body.password);
    if (!user) {
      res.status(400).json('Wrong credentials');
    } else {
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        res.status(400).json('Wrong credentials');
      } else {
        const { password, ...others } = user._doc;
        console.log(others);
        sendTokenResponse(res, others, 'successful');
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get users
router.get('/:user_id', async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.user_id });
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all users
router.get('/', async (req, res) => {
  try {
    const card = await User.find();
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
