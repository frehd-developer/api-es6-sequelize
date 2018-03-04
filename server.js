import app from './app';
import http, { Server } from 'http';
import config from './config';
//global.config = config;

//app.server = http.createServer(app);

Server(app).listen(process.env.PORT || config.port, () => {
    console.log(`Running server at port ${config.port}`);
});

// app.server.listen(process.env.PORT || global.config.port, () => {
//     console.log(`Running server at port ${global.config.port}`);
// });
