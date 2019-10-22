import { Router } from 'express';
import TokenHelper from '../helpers/Token';
import Lesson from '../controllers/LessonController';

const lessonRoute = Router();

lessonRoute.post(
  '/lesson',
  TokenHelper.verifyInstructorToken('instructor'),
  Lesson.create
);

lessonRoute.get(
  '/lesson/:id',
  TokenHelper.verifyToken,
  Lesson.getOne
);

lessonRoute.get(
  '/lessons/:moduleId',
  TokenHelper.verifyToken,
  Lesson.getAllByModule
);

lessonRoute.put(
  '/lesson/:id',
  TokenHelper.verifyInstructorToken('instructor'),
  Lesson.updateLesson
);

export default lessonRoute;



