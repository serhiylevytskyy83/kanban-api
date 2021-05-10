const Router = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');
const userUpdateById = require('./userUpdateById');
const userDeleteById = require('./userDeleteById');
const userDeleteAll = require('./userDeleteAll');
const authorization = require('../core/authorization');

const router = Router();
router.post('/add', authorization, userRegister);
router.get('/', authorization, userGetAll);
router.get('/:userId', authorization, userGetById);
router.patch('/:userId', authorization, userUpdateById);
router.delete('/:userId', authorization, userDeleteById);
router.delete('/', authorization, userDeleteAll);

module.exports = router;
