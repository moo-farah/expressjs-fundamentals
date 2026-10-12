import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import postsRouter from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import NotFound from './middleware/NotFound.js';
const port = process.env.PORT || 8000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);


const app = express();


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(logger);


// Routes
app.use('/api/posts', postsRouter);


// Error handler middleware
app.use(NotFound);
app.use(errorHandler);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});