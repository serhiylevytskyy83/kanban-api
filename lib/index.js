"use strict";

var _express = _interopRequireDefault(require("express"));

var _errorHandler = _interopRequireDefault(require("./modules/core/errorHandler"));

var _logger = _interopRequireDefault(require("./modules/core/logger"));

var _parseResponse = _interopRequireDefault(require("./modules/core/parseResponse"));

var _cors = _interopRequireDefault(require("./modules/core/cors"));

var _routes = _interopRequireDefault(require("./modules/core/routes"));

var _db = _interopRequireDefault(require("./modules/core/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
// import getHome from './modules/home/home';
// import postInfo from './modules/info/info';
var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000; // localhost 5000

(0, _db["default"])();
(0, _logger["default"])(app);
(0, _parseResponse["default"])(app);
(0, _cors["default"])(app);
(0, _routes["default"])(app); // app.get('/', getHome);
// app.post('/info', postInfo);

(0, _errorHandler["default"])(app);
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});