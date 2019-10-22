import { Router } from 'express';
import authRoute from './user.routes';
import categoryRoute from './category.routes';
import blogRoute from './blog.routes';
import courseRoute from './course.routes';
import lessonRoute from './lesson.routes';
import profileRoute from './profile.routes';
import moduleRoute from './module.routes';
import commentRoute from './comment.routes';

const router = Router();

router.use('/auth', authRoute);
router.use('/category', categoryRoute);
router.use('/', blogRoute);
router.use('/', courseRoute);
router.use('/', lessonRoute);
router.use('/', profileRoute);
router.use('/', moduleRoute);
router.use('/', commentRoute);

export default router;
