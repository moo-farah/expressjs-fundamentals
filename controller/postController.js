// @desc  Get all posts
// @route GET /api/posts

let posts = [
    {id: 1, title: 'Software Engineering'},
    {id: 2, title: 'Data Science'},
    {id: 3, title: 'Cybersecurity'},
    {id: 4, title: 'Artificial Intelligence'},
    {id: 5, title: 'Machine Learning'},
    {id: 6, title: 'Computer Vision'},
    {id: 7, title: 'Natural Language Processing'},
    {id: 8, title: 'Robotics'},
    {id: 9, title: 'Blockchain'},
    {id: 10, title: 'Quantum Computing'},
]

const getPosts = ((req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        returnres.status(200).json(posts.slice(0, limit));
    }
     res.status(200).json(posts);
});



// @desc  Get single post
// @route GET /api/posts/:id
const getPostById =((req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
       const error = new Error(`A post with id ${id} is not found`);
       error.status = 404;
       return next(error);
    
    }
    res.status(200).json(post);
});


// @desc Create a new post
// @route POST /api/posts
const createPost = ((req, res, next) => {
    if (!req.body || !req.body.title) {
        const error = new Error(`Title is required`);
        error.status = 400;
        return next(error); // Pass the error to the error handler middleware
    }

    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    posts.push(newPost);
    res.status(201).json(posts);
});

// @desc Update a post
// @route PUT /api/posts/:id
const updatePost = ((req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error(`A post with id ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

// @desc Delete a post
// @route DELETE /api/posts/:id
const deletePost = ((req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id == id);

    if (!post) {
        const error = new Error(`A post with id ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter(post => post.id !== id);
    res.status(200).json(posts);
});

export { getPosts, getPostById, createPost, updatePost, deletePost };