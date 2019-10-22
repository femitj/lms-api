import { Router } from 'express';
import Blog from '../controllers/Blog';
import TokenHelper from '../helpers/Token';


const blogRoute = Router();

blogRoute.post(
  '/blog',
  TokenHelper.verifyInstructorToken('instructor'),
  Blog.create
);

blogRoute.get(
  '/blogs',
  Blog.getAll
);

blogRoute.get(
  '/blog/:slug',
  Blog.getOne
);

export default blogRoute;
