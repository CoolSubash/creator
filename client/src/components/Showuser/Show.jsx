import React, { useState, useEffect } from 'react'
import Singleshow from './Singleshow'
import './show.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Show = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get('http://localhost:8000/api/v2/user')
      .then((response) => {
        setData(response.data)
        console.log(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div id="show">
        <div className="show-heading">
          <h1>Creator List</h1>
        </div>
      </div>

      <div className="creator-list-container">
        {loading ? (
          <>
            <div className="loading-logo">
              <img
                className="loading-icon"
                src="https://media0.giphy.com/media/hWZBZjMMuMl7sWe0x8/200.webp?cid=ecf05e47098oarsb65vk3okv21ssfb2j6057kpj2qijkva8b&ep=v1_gifs_search&rid=200.webp&ct=g"
                alt=""
              />
            </div>
          </>
        ) : (
          data &&
          data.length > 0 &&
          data.map((user) => (
            <Link className="user-info" to={`/user/${user._id}`} key={user._id}>
              <Singleshow userData={user} />
            </Link>
          ))
        )}
      </div>
    </>
  )
}

export default Show
