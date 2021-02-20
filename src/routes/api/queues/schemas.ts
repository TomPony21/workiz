export const newMessageQueueSchema = {
    querystring: {
        properties: {
            queue_name: {type: 'string'},
        },
        required: ['queue_name']
    },
    body: {
        properties: {
            message: {type: 'string'},
        },
        required: ['message']
    }
};

export const nextMessageQueueSchema = {
    querystring: {
        properties: {
            queue_name: {type: 'string'},
            timeout: {type: 'number', default: 10000}
        },
        required: ['queue_name']
    }
};