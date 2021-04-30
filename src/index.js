// // // // console.log('Hello', 2 + 2)
// // //
// // // // const lodash = require('lodash');
// // // const{get} = require('lodash')   // destrukturizacia
// // // const obj = {
// // //     name: 'John',
// // // }
// // //
// // // const b = get(obj,'name','---')
// // // console.log(b)

// import express from 'express';
const express = require('express');
// import getHome from './modules/home/home';
// import postInfo from './modules/info/info';
const errorHandler = require('./modules/core/errorHandler');
const logger = require('./modules/core/logger');

const parseResponse = require('./modules/core/parseResponse');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const dbConnect = require('./modules/core/db');

const app = express();
const PORT = process.env.PORT || 5000;
// localhost 5000

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
//
// app.get('/', home);
// function home(req, res) {
//   res.json({
//     name: 'Joe',
//     lastname: ' Smith',
//     age: 20,
//   });
// }

// // app.post('/info', postInfo);
//
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
