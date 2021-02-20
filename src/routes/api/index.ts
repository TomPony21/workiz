import { FastifyPluginCallback } from 'fastify';
import queuesRoutes from './queues';

const apiRouts: FastifyPluginCallback = (server, option, done) => {
    server.register(queuesRoutes);

    done();
};

export default apiRouts;