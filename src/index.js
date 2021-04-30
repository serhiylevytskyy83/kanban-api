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
// import getHome from './modules/home/home';
// import postInfo from './modules/info/info';
// import errorHandler from './modules/core/errorHandler';
// import logger from './modules/core/logger';
// import parseResponse from './modules/core/parseResponse';
// import cors from './modules/core/cors';
// import routes from './modules/core/routes';
// import dbConnect from './modules/core/db';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// localhost 5000

// dbConnect();
// logger(app);
// parseResponse(app);
// cors(app);
// routes(app);

app.get('/', home);
function home(req, res) {
  res.json({
    name: 'Joe',
    lastname: ' Smith',
    age: 20,
  });
}
// app.post('/info', postInfo);

// errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//"start": "nodemon --inspect --exec babel-node src/index.js",
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "babel-node": "babel-node --presets=@babel/preset-env --ignore='foo|bar|baz'"
