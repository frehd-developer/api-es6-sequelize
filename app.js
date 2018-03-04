import express from 'express';
import bodyParser from 'body-parser';
import routes from './api/routes'; 
import userRoutes from './api/routes/user';
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/', userRoutes);

export default app;