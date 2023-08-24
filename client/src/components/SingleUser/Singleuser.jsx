import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import './single.css'
import { Link, useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

import './single.css' // Make sure to import your CSS file

const Singleuser = () => {
  const param = useParams()

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v2/user/${param.id}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [param.id])

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/v2/user/${param.id}`)
      .then(() => {
        setShowModal(false)
        alert('delete')
        // Redirect to the home page after successful deletion
        navigate('/')
      })
      .catch((error) => {
        console.error('Error deleting user:', error)
      })
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-logo">
          <img
            className="loading-icon"
            src="https://media0.giphy.com/media/hWZBZjMMuMl7sWe0x8/200.webp?cid=ecf05e47098oarsb65vk3okv21ssfb2j6057kpj2qijkva8b&ep=v1_gifs_search&rid=200.webp&ct=g"
            alt="Loading"
          />
        </div>
      </div>
    )
  }

  const { username, description, socialMedia, image } = data

  return (
    <div className="user-profile">
      <div className="user-info">
        <img className="user-avatar" src={image} alt="User Avatar" />
        <h2 className="user-name">{username}</h2>
        <p className="user-description">{description}</p>
        <div className="user-social-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href={socialMedia?.facebook}
            className="social-icon"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={socialMedia?.twitter}
            className="social-icon"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
      <div className="user-actions">
        <Link to={`/edit/${param.id}`} className="btn-single">
          <button className="edit-user">Edit</button>
        </Link>

        <button className="delete-button" onClick={() => setShowModal(true)}>
          Delete
        </button>
      </div>

      {showModal && (
        <div className="delete-modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this user?</p>
            <button className="modal-button" onClick={handleDelete}>
              Yes
            </button>
            <button
              className="modal-button"
              onClick={() => setShowModal(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Singleuser
