import './App.css'
import Home from './components/Home/home'
import User from './components/User/User'
import Show from './components/Showuser/Show'
import Singleuser from './components/SingleUser/Singleuser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './components/Post/Post'
import Edit from './components/Edit/Edit'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createuser" element={<User />} />
          <Route path="/user" element={<Show />} />
          <Route path="/user/:id" element={<Singleuser />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
