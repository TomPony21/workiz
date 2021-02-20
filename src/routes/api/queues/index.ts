import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import { nextMessageQueueSchema, newMessageQueueSchema } from './schemas';
import { NewMessageQueueBody, NewMessageQueueMetaData, NextMessageQueue } from './types';
import { getNextMessageInQueue, addMessageToQueue } from '../../../queuesService/queuesService';
import { Message } from '../../../models';

export const queuesRoutes: FastifyPluginCallback = async (server, option, done) => {
    server.get('/', {schema: nextMessageQueueSchema}, (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const {queue_name, timeout} = request.query as NextMessageQueue;
            const nextMessage = getNextMessageInQueue(queue_name);
            reply.send(nextMessage);
        } catch (e) {
            reply.code(204).send({message: e.message, statusCode: 204});
        }
    });

    server.post('/', {schema: newMessageQueueSchema}, (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const {queue_name} = request.query as NewMessageQueueMetaData;
            const {message} = request.body as NewMessageQueueBody;

            addMessageToQueue(queue_name, new Message(message));

            reply.send('OK');
        } catch (e) {
            reply.status(500).send({message: e.message, statusCode: 500});
        }
    });

    done();
};

export default queuesRoutes;
