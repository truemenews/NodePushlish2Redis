const redis = require('redis');
const publisher = redis.createClient({
    socket: {
        port: 63799, // Change to Your Port Redis
        host: 'host.docker.internal' // Change to your host Redis
    }
});

(async () => {
    const article = {
        id: '123456',
        name: 'Publish message to Redis with Node.js',
        blog: 'Trueme blog name',
    };

    await publisher.connect();
    await publisher.publish('laravel_database_trueme-channel', JSON.stringify(article));
})();
