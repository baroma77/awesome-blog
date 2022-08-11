import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`container ${theme}`}>
      <Navbar />
      <div className='main'>
        <h1>Posts</h1>
        <ul>
          <li>
            <h2>Post 1</h2>
            <p>Contenido de post 1</p>
          </li>
          <li>
            <h2>Post 2</h2>
            <p>Contenido de post 2</p>
          </li>
        </ul>
      </div>
      <div className='footer'>
        Blog Increíble. Todos los derechos reservados.
      </div>
    </div>
  )
}

export default App
