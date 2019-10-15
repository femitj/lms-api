import { Router } from 'express';
import TokenHelper from '../helpers/Token';
import Lesson from '../controllers/Lesson';

const lessonRoute = Router();

lessonRoute.post(
  '/lesson',
  TokenHelper.verifyInstructorToken('instructor'),
  Lesson.create
);

lessonRoute.get(
  '/lesson/:lessonId',
  TokenHelper.verifyToken,
  Lesson.getOne
);

lessonRoute.get(
  '/lessons/:courseId',
  TokenHelper.verifyToken,
  Lesson.getAllByCourse
);

lessonRoute.put(
  '/lesson/:lessonId',
  TokenHelper.verifyInstructorToken('instructor'),
  Lesson.updateLesson
);

export default lessonRoute;



