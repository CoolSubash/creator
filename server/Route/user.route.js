const express = require('express')
const router = express.Router()
const {
  userCreate,
  getSinglePost,
  getAllPosts,
  deleteUser,
  userUpdate,
} = require('../Controller/user.controller')

// create a post

router.post('/', userCreate)
router.put('/:id', userUpdate)
router.delete('/:id', deleteUser)
router.get('/:id', getSinglePost)
router.get('/', getAllPosts)

module.exports = router
