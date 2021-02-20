import fastify, { FastifyInstance } from 'fastify';
// @ts-ignore
import * as config from 'config';

import apiRouts from './routes/api';
import { initializeManager } from './queuesService/queuesService';

const PORT = config.get<string>('QueuesManager');
const server: FastifyInstance = fastify();

server.register(apiRouts, {prefix: '/api'});

const start = async () => {
    try {
        await server.listen(PORT, '0.0.0.0');
    } catch (err) {
        server.log.error(err);
    }
};

start();
initializeManager();
