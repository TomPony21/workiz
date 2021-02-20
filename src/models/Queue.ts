import { Message } from './Message';

export class Queue {
    queueMessages: Array<Message>;

    constructor() {
        this.queueMessages = new Array<Message>();
    }

    addMessage(message: Message): void {
        this.queueMessages.push(message);
    }

    getNextMessage(queueName: string): Message | undefined {

        if (this.queueMessages.length === 0) {
            throw new Error(` ${queueName} Queue is null`);
        }

        const nextMessage = this.queueMessages.pop();

        return nextMessage;
    }
}