const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


//http://127.0.0.1:5000/api/post (GET)
router.get('/', async(req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})
//http://127.0.0.1:5000/api/post (POST)
router.post('/', async(req, res) => {
    const postData = {
        title: req.body.title,
        text: req.body.text
    }

    const post = new Post(postData)

    await post.save()
    res.status(201).json(post)
})
//http://127.0.0.1:5000/api/post (DELETE)
router.delete('/:id', (req, res) => {
    Post.remove({_id: req.params.postId})
    res.status(200).json({
        message: 'Удалено'
    })
})


module.exports = router