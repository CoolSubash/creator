const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
  channelLink: String,
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
