import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './database/db.js';
import defaultData from './default.js';

import route from './routes/route.js';


const app= express();
dotenv.config();
app.use(cors());
app.use('/',route);
const PORT=8000;


const username= process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

connection(username,password);

app.listen(PORT, ()=> console.log(`Server is running successfully on Port ${PORT}`));

defaultData();