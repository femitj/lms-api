import { Router } from 'express';
import Blog from '../controllers/Blog';
import TokenHelper from '../helpers/Token';


const blogRoute = Router();

blogRoute.post(
  '/',
  TokenHelper.verifyInstructorToken('instructor'),
  Blog.create
);

blogRoute.get(
  '/',
  Blog.getAll
);

blogRoute.get(
  '/:blogId',
  Blog.getOne
);

export default blogRoute;
