import express from 'express';
const router = express.Router();
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controller/postController.js';

// Get all posts
router.get('/', getPosts);

// Get a single post
router.get('/:id', getPostById);

// Create a new post
router.post('/', createPost);

// Update a post
router.put('/:id', updatePost);

// Delete a post
router.delete('/:id', deletePost);

export default router;