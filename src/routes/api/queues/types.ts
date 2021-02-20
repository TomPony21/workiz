export type NewMessageQueueMetaData = {
    queue_name: string;
};

export type NewMessageQueueBody = {
    message: string;
};

export type NextMessageQueue = {
    queue_name: string;
    timeout: number;
};