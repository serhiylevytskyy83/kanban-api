const Router = require('express');
const postColumn = require('./postColumn');
const getColumn = require('./getColumn');
const deleteColumn = require('./deleteColumn');

const router = Router();
router.post('/', postColumn);
router.get('/', getColumn);
router.delete('/:userId', deleteColumn);

module.exports = router;
