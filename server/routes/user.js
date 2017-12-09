import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import jwt from '../middlewares/jwt';
import UserController from '../controllers/user';

const api = 'user';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

// GET /api/user
router.get('/', UserController.find);

// POST /api/user
// This route is protected, call POST /api/authenticate to get the token
router.post('/', jwt, UserController.add);

// GET /api/user/id
// This route is protected, call POST /api/authenticate to get the token
router.get('/:id', jwt, UserController.findById);

// PUT /api/user/id
// This route is protected, call POST /api/authenticate to get the token
router.put('/:id', jwt, UserController.update);

// DELETE /api/user/id
// This route is protected, call POST /api/authenticate to get the token
router.delete('/:id', jwt, UserController.delete);

export default router;




