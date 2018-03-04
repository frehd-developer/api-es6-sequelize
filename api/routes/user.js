import { Router } from 'express';
import userController from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/user', userController.index);
userRoutes.get('/user/:id', userController.show);
userRoutes.post('/user', userController.store);
userRoutes.put('/user/:id', userController.update);
userRoutes.delete('/user/:id', userController.destroy);

export default userRoutes;