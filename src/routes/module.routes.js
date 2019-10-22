import { Router } from 'express';
import TokenHelper from '../helpers/Token';
import Module from '../controllers/ModuleController';

const moduleRoute = Router();

moduleRoute.post(
  '/module',
  TokenHelper.verifyInstructorToken('instructor'),
  Module.create
);

moduleRoute.get(
  '/module/:moduleId',
  TokenHelper.verifyToken,
  Module.getOne
);

moduleRoute.get(
  '/modules/:courseId',
  TokenHelper.verifyToken,
  Module.getAllByCourse
);

moduleRoute.put(
  '/module/:moduleId',
  TokenHelper.verifyInstructorToken('instructor'),
  Module.updateModule
);

export default moduleRoute;
