import express from 'express'
import {createPost, getPosts, likePost} from '../controllers/postControllers.js'

const router = express.Router()

router.route('/').get(getPosts)
router.route('/').post(createPost)
router.route('/:id/likePost').patch(likePost)


export default router