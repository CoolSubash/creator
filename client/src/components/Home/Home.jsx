import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <div className="background"></div>
      <div className="content">
        <Link to="/post">
          <button className="create-user-button">Create User</button>
        </Link>
        <Link to="/user">
          <button className="show-user-button">Show User</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
