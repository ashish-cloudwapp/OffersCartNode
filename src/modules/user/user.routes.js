import express from 'express';
import { register , login} from './user.controller.js';
import { registerSchema, loginSchema } from './user.validator.js';
import { validate } from '../../common/middlewares/validate.js';

const router = express.Router();

router.post('/register',validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;


