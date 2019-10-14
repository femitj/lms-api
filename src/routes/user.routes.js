import { Router } from 'express';
import Auth from '../controllers/Auth';
import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import {
  signupSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema
} from '../validations/authSchema';
import validator from '../middlewares/validator';
import TokenHelper from '../helpers/Token';

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

authRoute.post(
  '/forgot_password',
  validator(forgotPasswordSchema),
  Auth.forgotPassword
);

authRoute.post(
  '/reset_password/:resetToken',
  validator(resetPasswordSchema),
  Auth.resetPassword
);

authRoute.patch(
  '/verify',
  TokenHelper.verifyToken,
  Auth.verifyEmail
);

export default authRoute;
