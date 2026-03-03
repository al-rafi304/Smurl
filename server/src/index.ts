import http from 'http';
import express from 'express';
import 'express-async-errors';
import { loggingHandler } from './middlewares/loggingHandler.js';
import connectDB from './database.js';
import * as env from './config/env.js';

const server = express();
let httpServer: ReturnType<typeof http.createServer>;

import smurlRoutes from './routes/smurl.js';

const start = async () => {
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.use(loggingHandler);

    server.use('/api/v1', smurlRoutes);

    await connectDB();

    httpServer = http.createServer(server);
    httpServer.listen(env.SERVER_ENV.PORT, () => {
        console.log(`Server started on ${env.SERVER_ENV.HOST}:${env.SERVER_ENV.PORT}`);
    })
}

start()