const Profile = require('../Model/User.model.js')

const userCreate = async (req, res) => {
  // const {username,image,description,socialMedia,channelLink}=req.body;
  try {
    const newpostuser = new Profile(req.body)
    const savepost = await newpostuser.save()

    return res.status(201).json(savepost)
  } catch (error) {
    return res.status(500).json({ error: `Error creating post ${error}` })
  }
}

const userUpdate = async (req, res) => {
  // Assuming  passing the post ID as a route parameter
  // Assuming sending the updated post data in the request body

  try {
    // Find the post by its ID
    const postToUpdate = await Profile.findById(req.params.id)
    const updateData = req.body

    if (!postToUpdate) {
      return res.status(404).json({ error: 'Post not found' })
    }

    // Update the post properties
    Object.assign(postToUpdate, updateData)

    // Save the updated post
    const updatedPost = await postToUpdate.save()

    return res.status(200).json(updatedPost)
  } catch (error) {
    return res.status(500).json({ error: `Error updating post: ${error}` })
  }
}

//   delete post

const deleteUser = async (req, res) => {
  const postId = req.params.id // Assuming you're passing the post ID as a route parameter

  try {
    // Find the post by its ID and remove it
    const deletedPost = await Profile.findByIdAndRemove(postId)

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' })
    }

    return res.status(200).json({ message: 'Post deleted successfully' })
  } catch (error) {
    return res.status(500).json({ error: `Error deleting post: ${error}` })
  }
}

//   getall Post

const getAllPosts = async (req, res) => {
  try {
    // Fetch all posts from the database
    const allPosts = await Profile.find()

    return res.status(200).json(allPosts)
  } catch (error) {
    return res.status(500).json({ error: `Error fetching posts: ${error}` })
  }
}

//   getsingle Post
const getSinglePost = async (req, res) => {
  const postId = req.params.id // Assuming you're passing the post ID as a route parameter

  try {
    // Fetch the post by its ID from the database
    const post = await Profile.findById(postId)

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).json({ error: `Error fetching post: ${error}` })
  }
}

module.exports = {
  userCreate,
  getSinglePost,
  getAllPosts,
  deleteUser,
  userUpdate,
}
