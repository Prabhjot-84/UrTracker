import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { addExpenseFunc } from './controller/create.js';
import { getExpensesByUserID } from './controller/read.js';
import { updateExpenseByID } from './controller/update.js';
import { deleteExpenseByID } from './controller/delete.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use( cors({credentials:true, origin:'http://localhost:5173'}) );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.CONNECTION_URI);

app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});

app.post('/expense', addExpenseFunc);
app.get('/expense/:userId', getExpensesByUserID);
app.put('/expense/:id', updateExpenseByID);
app.delete('/expense/:id', deleteExpenseByID);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); 
});