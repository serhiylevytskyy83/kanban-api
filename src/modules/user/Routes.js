const Router = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');
const userUpdateById = require('./userUpdateById');
const userDeleteById = require('./userDeleteById');
const userDeleteAll = require('./userDeleteAll');
const authorization = require('../core/authorization');

const router = Router();
router.post('/add', authorization, userRegister); // localhost5000/
router.get('/', authorization, userGetAll); // localhost/user
router.get('/:userId', userGetById); // localhost/user/id
router.patch('/:userId', userUpdateById); // localhost/user/id
router.delete('/:userId', userDeleteById); // localhost/user/id
router.delete('/', userDeleteAll); // localhost/user

module.exports = router;
