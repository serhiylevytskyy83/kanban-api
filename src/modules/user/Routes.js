const Router = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');
const userUpdateById = require('./userUpdateById');
const userDeleteById = require('./userDeleteById');
const userDeleteAll = require('./userDeleteAll');

const router = Router();
router.post('/', userRegister); // localhost5000/info
router.get('/', userGetAll); // localhost/user
router.get('/:userId', userGetById); // localhost/user/id
router.patch('/:userId', userUpdateById); // localhost/user/id
router.delete('/:userId', userDeleteById); // localhost/user/id
router.delete('/', userDeleteAll); // localhost/user

module.exports = router;
