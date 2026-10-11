import express from 'express';
const router = express.Router();


let posts = [
    {id: 1, title: 'Post 1', body: 'This is the first post'},
    {id: 2, title: 'Post 2', body: 'This is the second post'},
    {id: 3, title: 'Post 3', body: 'This is the third post'},
];

// Get all notes
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        returnres.status(200).json(posts.slice(0, limit));
    }
     res.status(200).json(posts);
});

// Get a single note
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = posts.find(post => post.id === id);

    if (!found) {
        return res.status(404).json({message : `A post with id ${id} is not found`})
    }
    res.status(200).json(found);
});

// Create a new post
router.post('/', (req, res) => {
    if (!req.body || !req.body.title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    posts.push(newPost);
    res.status(201).json(posts);
});

// Update a post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = posts.find(post => post.id === id);

    if (!found) {
        return res.status(404).json({message : `A post with id ${id} is not found`})
    }

    found.title = req.body.title;
    res.status(200).json(posts);
});

// Delete a post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = posts.find(post => post.id == id);

    if (!found) {
        return res.status(404).json({message : `A post with id ${id} is not found`})
    }

    posts = posts.filter(post => post.id !== id);
    res.status(200).json(posts);
})

export default router;