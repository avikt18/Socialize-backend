import mongoose from 'mongoose'
import PostMessage from "../models/postMessage.js"

const createPost = async (req, res) => {
    const data = req.body
    console.log('New Post Created Successfully', data)
    try {
        const newPost = new PostMessage(data)
        await newPost.save()
        res.status(200).json(newPost)

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err })
    }

}

const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

const likePost = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(400).send('Invalid id')

    if(!mongo)
    try {
        const post = await PostMessage.findById(id)
        if(!post) return res.status(400).send('No post with id:' + id)
        const likedPost = await PostMessage.findByIdAndUpdate(
            id,
            { likeCount: post.likeCount + 1 },
            { new: true }
        )
        res.status(200).json(likePost)
    } catch (error) {
        res.status(400).send('LikeCount Error')
    }
}

//TODO: Add **updatePost** controller


export { createPost, getPosts, likePost}