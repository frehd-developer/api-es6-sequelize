import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {
    res.send({message: 'Hello world!!!' });
});

export default routes;