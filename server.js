import express from 'express';
import path from 'path';
import postsRouter from './routes/posts.js';
const port = process.env.PORT || 8000;

const app = express();


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Serve static files from the public directory
// app.use(express.static(path.join(import.meta.dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/api/posts', postsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});