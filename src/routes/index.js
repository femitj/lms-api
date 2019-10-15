import { Router } from 'express';
import authRoute from './user.routes';
import categoryRoute from './category.routes';
import blogRoute from './blog.routes';
import courseRoute from './course.routes';
import lessonRoute from './lesson.routes';
import profileRoute from './profile.routes';

const router = Router();

router.use('/auth', authRoute);
router.use('/category', categoryRoute);
router.use('/blogs', blogRoute);
router.use('/', courseRoute);
router.use('/', lessonRoute);
router.use('/', profileRoute);

export default router;
