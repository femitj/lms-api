import { Router } from 'express';
import Auth from '../controllers/Auth';
import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import {
  signupSchema,
  loginSchema
} from '../validations/authSchema';
import validator from '../middlewares/validator';

// import TokenHelper from '../helpers/Token';

const authRoute = Router();

authRoute.post(
  '/register/user',
  validator(signupSchema),
  AuthMiddlewares.checkExistingUser,
  Auth.signup
);

authRoute.post(
  '/login',
  validator(loginSchema),
  Auth.login,
);

export default authRoute;
