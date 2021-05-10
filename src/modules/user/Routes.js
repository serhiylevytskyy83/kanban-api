const Router = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');
const userUpdateById = require('./userUpdateById');
const userDeleteById = require('./userDeleteById');
const userDeleteAll = require('./userDeleteAll');
// const authorization = require('../core/authorization');

const router = Router();
router.post('/add', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById);
router.patch('/:userId', userUpdateById);
router.delete('/:userId', userDeleteById);
router.delete('/', userDeleteAll);

module.exports = router;
