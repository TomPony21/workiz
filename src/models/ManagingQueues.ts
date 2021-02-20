import { Queue } from './Queue';
import { Message } from './Message';

export class ManagingQueues {
    queues: Map<string, Queue>;

    constructor() {
        this.queues = new Map<string, Queue>();
    }

    createQueue(queueName: string) {
        this.queues.set(queueName, new Queue());
    }

    addMessageToQueue(queueName: string, message: Message) {
        const currentQueue = this.queues.get(queueName);

        if (!currentQueue) {
            throw new Error(`Queue: ${queueName} is not exist`);
        }

        currentQueue.addMessage(message);
    }

    getNextMessageFromQueue(queueName: string): Message | undefined {
        const currentQueue = this.queues.get(queueName);

        if (!currentQueue) {
            throw new Error(`Queue: ${queueName} is not exist`);

        }

        const nextMessage = currentQueue.getNextMessage(queueName);

        return nextMessage;
    }
}