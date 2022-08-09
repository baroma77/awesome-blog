import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='container light'>
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
