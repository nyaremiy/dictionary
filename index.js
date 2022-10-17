import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js';

const app = express();

mongoose
  .connect(
    'mongodb+srv://n_yaremiy:QCa0qU3Ndph8yVTP@cluster0.4o63i2n.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB connected!'))
  .catch((err) => console.log('Error: ', err));

app.use(cors());
app.use(express.json());

app.post('/auth/reg', async (req, res) => {
  const { email, password } = req.body;
  console.log(User);

  const user = new User({
    email: email,
    password: password
  });

  await user.save();

  res.status(201).json({
    message: 'success',
    user: user
  });
});

app.listen('4444', () => {
  console.log('Server started...');
});
