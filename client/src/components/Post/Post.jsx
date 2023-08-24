import React, { useState } from 'react'
import axios from 'axios'
import './post.css'
const Post = () => {
  const [formData, setFormData] = useState({
    username: '',
    channelLink: '',
    description: '',
    image: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      socialMedia: {
        ...prevData.socialMedia,
        [name]: value,
      },
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Send form data to the server using axios
    axios
      .post('http://localhost:8000/api/v2/user', formData)
      .then((response) => {
        alert('Successfully Post')
        console.log('Data successfully submitted:', response.data)
        // Reset the form fields after submission
        setFormData({
          username: '',
          channelLink: '',
          description: '',
          image: '',
          socialMedia: {
            facebook: '',
            twitter: '',
            instagram: '',
          },
        })
      })
      .catch((error) => {
        console.error('Error submitting data:', error)
      })
  }

  return (
    <div className="post-container">
      <div className="post">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label>Channel Link</label>
          <input
            type="text"
            name="channelLink"
            value={formData.channelLink}
            onChange={handleInputChange}
          />

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>

          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />

          <label>Facebook</label>
          <input
            type="text"
            name="facebook"
            value={formData.socialMedia.facebook}
            onChange={handleInputChange}
          />

          <label>Twitter</label>
          <input
            type="text"
            name="twitter"
            value={formData.socialMedia.twitter}
            onChange={handleInputChange}
          />

          <label>Instagram</label>
          <input
            type="text"
            name="instagram"
            value={formData.socialMedia.instagram}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Post
