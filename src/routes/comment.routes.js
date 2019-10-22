import { Router } from 'express';
import CommentController from '../controllers/CommentController';

const commentRoute = Router();

commentRoute.post(
  '/comment',
  CommentController.create
);

commentRoute.get(
  '/comments',
  CommentController.getAll
);

export default commentRoute;
