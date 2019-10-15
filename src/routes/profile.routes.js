import { Router } from 'express';
import Profile from '../controllers/Profile';
import TokenHelper from '../helpers/Token';
import validator from '../middlewares/validator';
import { profileSchema } from '../validations/profileSchema';

const profileRoute = Router();

profileRoute.get(
  '/profile',
  TokenHelper.verifyToken,
  Profile.getProfile,
);

profileRoute.get(
  '/instructor/profile/:courseId',
  TokenHelper.verifyToken,
  Profile.getInstructorProfile,
);

profileRoute.put(
  '/profile',
  validator(profileSchema),
  TokenHelper.verifyToken,
  Profile.updateProfile,
);

export default profileRoute;
