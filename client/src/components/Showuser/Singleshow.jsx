import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './show.css'

const Singleshow = ({ userData }) => {
  const {
    channelLink,
    description,
    image,
    socialMedia,
    username,
    _id,
  } = userData
  const limiteddescription = description?.substring(0, 100)

  return (
    <div className="user-card" style={{ '--bg-image': `url(${image})` }}>
      <h2>{username}</h2>

      <p className="description">{limiteddescription}</p>

      <div className="single-btn-update">
        <Link to={`/user/${_id}`} className="btn-single">
          <button className="read-more">Read More</button>
        </Link>
        <Link to={`/edit/${_id}`} className="btn-single">
          <button className="edit-user">Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default Singleshow
