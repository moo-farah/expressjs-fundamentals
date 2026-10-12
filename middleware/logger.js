import colors from 'colors';

// Middleware
const logger = (req, res, next) => {
    const colorMethod = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const color = colorMethod[req.method] || 'white';

    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}` [
            color
        ]
    );
    next();
}

export default logger;