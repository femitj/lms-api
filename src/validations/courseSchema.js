import { check } from 'express-validator';
import capitalize from '../helpers/capitalize';

const courseSchema = [
  check('title')
    .exists().withMessage('Title is required'),

  check('description')
    .exists().withMessage('Description is required'),

  check('videoUrl')
    .optional()
];

export {
  courseSchema,
}