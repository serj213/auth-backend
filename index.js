import express from 'express';
import mongoose from 'mongoose';

import { registValidation } from './validations/auth.js';
import * as UserController from './controlers/User.js';

import checkedMe from './utils/chechedMe.js';

const PORT = '7777';

mongoose
  .connect('mongodb+srv://sergey:12345@cluster0.j6xvy.mongodb.net/auth?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB ok');
  })
  .catch((error) => {
    console.log('DB error', error);
  });

const app = express();
app.use(express.json());

app.post('/registration', UserController.register);

app.post('/login', UserController.login);

app.post('/auth/me', checkedMe, UserController.getMe);

const start = async () => {
  try {
    app.listen(PORT, () => console.log('server start'));

    console.log();
  } catch (error) {
    console.log(error);
    console.log('server error');
  }
};

start();

// 1:06:13
