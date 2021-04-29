import { Router } from 'express';
import postColumn from './postColumn';
import getColumn from './getColumn';
const router = Router();
router.post('/', postColumn);
router.get('/', getColumn);

export default router;
