import { Router } from 'express';
import Category from '../controllers/Category';
// import {
//   signupSchema,
//   loginSchema
// } from '../validations/authSchema';
// import validator from '../middlewares/validator';
import TokenHelper from '../helpers/Token';

const categoryRoute = Router();

categoryRoute.post(
  '/',
  // validator(signupSchema),
  TokenHelper.verifyInstructorToken('instructor'),
  Category.create,
);

categoryRoute.get(
  '/blogs',
  TokenHelper.verifyToken,
  Category.getAllForBlogs,
);

categoryRoute.get(
  '/courses',
  TokenHelper.verifyToken,
  Category.getAllForCourses,
);

export default categoryRoute;
