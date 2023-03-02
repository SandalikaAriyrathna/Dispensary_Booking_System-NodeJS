const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

const UserAuthRoute = require('../routes/UserAuth');

const cors = require('cors');

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req);
    cb(null, 'api/profile_pic');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

const update = multer({ storage: storage });
app.put('/api/update', update.single('file'), (req, res) => {
  res.status(200).json('File has been updated');
});

app.use('/api/UserAuth', UserAuthRoute);
// app.use('/profile_pic', express.static(path.join(__dirname, '/profile_pic')));

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
app.use(express.static(__dirname + 'api/profile_pic'));

app.listen('5000', () => {
  console.log('Backend is running.');
});
