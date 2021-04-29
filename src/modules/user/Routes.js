import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import userDeleteAll from './userDeleteAll';

const router = Router();
router.post('/', userRegister); // localhost5000/info
router.get('/', userGetAll); // localhost/user
router.get('/:userId', userGetById); // localhost/user/id
router.patch('/:userId', userUpdateById); // localhost/user/id
router.delete('/:userId', userDeleteById); // localhost/user/id
router.delete('/', userDeleteAll); // localhost/user

export default router;
