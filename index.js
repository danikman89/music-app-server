import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import { register, login, getMe, update } from './controllers/UserController.js';
import handleValidationErrors from './utils/handleValidationErrors.js';
import cors from 'cors';

mongoose
  .connect(process.env.MOGODB_URI)
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err));
const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', loginValidation, handleValidationErrors, login);
app.post('/register', registerValidation, handleValidationErrors, register);
app.get('/user', checkAuth, getMe);
app.patch('/user/:id', checkAuth, update);

app.listen(process.env.PORT || 7000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server, OK!');
});
