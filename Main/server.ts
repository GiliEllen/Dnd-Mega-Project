console.log('this is server.ts')

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


import mongoose from "mongoose";
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());

const url= process.env.MONGODB_URI;

mongoose.connect(url
).then(() => {
  console.log('conntect to DB')
}).catch(err =>{
  console.error(err)
})

import userRoutes from "./routes/usersRoutes"
app.use('/users'  , userRoutes)

server.listen(3000, () => {
  console.log('listening on *:3000');
});