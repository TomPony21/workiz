import { ManagingQueues, Message } from '../models';
import * as config from 'config';

let queuesManger: ManagingQueues;

const initializeManager = (): void => {
    initializeQueuesManager();
    createQueues();
};

const initializeQueuesManager = (): void => {
    queuesManger = new ManagingQueues();
};

const createQueues = (): void => {
    const queues = config.get<Array<string>>('QueuesManager.queueNames');
    queues.forEach(queueName => queuesManger.createQueue(queueName));
};

const addMessageToQueue = (queueName: string, message: Message): void => {
    queuesManger.addMessageToQueue(queueName, message);
};

const getNextMessageInQueue = (queueName: string): string => {
    const currentMessage = queuesManger.getNextMessageFromQueue(queueName);
    const parseMessage = JSON.stringify(currentMessage);

    return parseMessage;
};


export {
    initializeManager,
    addMessageToQueue,
    getNextMessageInQueue
};