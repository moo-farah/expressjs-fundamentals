// 404 Not Found middleware
const NotFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
};

export default NotFound;