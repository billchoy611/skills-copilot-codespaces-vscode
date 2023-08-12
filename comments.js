// Create web server
// 1. npm init -y
// 2. npm install express
// 3. node comments.js

const express = require('express');
const app = express();

// http://localhost:3000/comments?postId=1
app.get('/comments', (req, res) => {
    // req.query: {postId: '1'}
    const postId = req.query.postId;
    res.send(`Get comments for post ${postId}`);
});

// http://localhost:3000/comments/1
app.get('/comments/:postId', (req, res) => {
    // req.params: {postId: '1'}
    const postId = req.params.postId;
    res.send(`Get comments for post ${postId}`);
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});