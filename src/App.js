import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './ThemeContext'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path='/post/:postId' element={<PostPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
        <div className='footer'>
          Blog Increíble. Todos los derechos reservados.
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
