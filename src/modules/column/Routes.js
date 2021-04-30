const Router = require('express');
const postColumn = require('./postColumn');
const getColumn = require('./getColumn');

const router = Router();
router.post('/', postColumn);
router.get('/', getColumn);

module.exports = router;
