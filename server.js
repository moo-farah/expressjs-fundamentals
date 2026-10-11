const e = require('express');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

let notes = [
    {id: 1, title: 'Note 1', body: 'This is the first note'},
    {id: 2, title: 'Note 2', body: 'This is the second note'},
    {id: 3, title: 'Note 3', body: 'This is the third note'},
];

// Get all notes
app.get('/api/notes', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        returnres.status(200).json(note.slice(0, limit));
    }
     res.status(200).json(notes);
});

// Get a single note
app.get('/api/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = notes.find(note => note.id === id);

    if (!found) {
        return res.status(404).json({message : `A note with id ${id} is not found`})
    }
         res.status(200).json(found);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});