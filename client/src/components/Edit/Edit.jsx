import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './edit.css'
import { useParams } from 'react-router-dom'

const Edit = () => {
  const userId = useParams()
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v2/user/${userId.id}`)
      .then((response) => {
        setFormData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [userId])

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
    axios
      .put(`http://localhost:8000/api/v2/user/${userId.id}`, formData)
      .then((response) => {
        alert('Data Updated')
        console.log('Data successfully updated:', response.data)
      })
      .catch((error) => {
        alert(error)
        console.error('Error updating data:', error)
      })
  }

  return (
    <div className="edit-container">
      <div className="edit">
        <h2>Edit User Profile</h2>
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

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Edit
