import { Router } from 'express';
import Course from '../controllers/Course';
import TokenHelper from '../helpers/Token';
import {
  courseSchema,
} from '../validations/courseSchema';
import validator from '../middlewares/validator';


const courseRoute = Router();

courseRoute.post(
  '/course',
  TokenHelper.verifyInstructorToken('instructor'),
  validator(courseSchema),
  Course.create
);

courseRoute.get(
  '/courses',
  TokenHelper.verifyToken,
  Course.getAll
);

courseRoute.get(
  '/course/:courseId',
  TokenHelper.verifyToken,
  Course.getOne
);

courseRoute.get(
  '/category_courses/:categoryId',
  TokenHelper.verifyToken,
  Course.getCoursesFromCategory
);

courseRoute.get(
  '/courses/mycourses',
  TokenHelper.verifyToken,
  Course.getStudentCourses
);

courseRoute.post(
  '/course/enroll/:courseId',
  TokenHelper.verifyToken,
  Course.enroll
);

courseRoute.put(
  '/course/:courseId',
  TokenHelper.verifyInstructorToken('instructor'),
  Course.updateCourse
)

export default courseRoute;
