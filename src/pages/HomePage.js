import axios from 'axios'
import React, { useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'

const reducer = (state, action) => {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, loading: true }
    case 'POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload, error: '' }
    case 'POSTS_FAIL':
      return { ...state, error: action.payload, loading: false }
    case 'USERS_REQUEST':
      return { ...state, loadingUsers: true }
    case 'USERS_SUCCESS':
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
        errorUsers: '',
      }
    case 'USERS_FAIL':
      return { ...state, errorUsers: action.payload, loadingUsers: false }
    default:
      return state
  }
}

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
    posts: [],
    loadingUsers: false,
    errorUsers: '',
    users: [],
  })
  const { loading, error, posts, loadingUsers, errorUsers, users } = state
  const loadPosts = async () => {
    dispatch({ type: 'POSTS_REQUEST' })
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      dispatch({ type: 'POSTS_SUCCESS', payload: data })
    } catch (err) {
      dispatch({ type: 'POSTS_FAIL', payload: err.message })
    }
  }
  const loadUsers = async () => {
    dispatch({ type: 'USERS_REQUEST' })
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      dispatch({ type: 'USERS_SUCCESS', payload: data })
    } catch (err) {
      dispatch({ type: 'USERS_FAIL', payload: err.message })
    }
  }

  useEffect(() => {
    loadPosts()
    loadUsers()
  }, [])
  return (
    <div className='blog'>
      <div className='content'>
        <h1>Posts</h1>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error:{error}</div>
        ) : posts.length === 0 ? (
          <div>No se encontraron posts</div>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                {post.body}
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='sidebar'>
        <h2>Autores</h2>
        {loadingUsers ? (
          <div>Loading...</div>
        ) : errorUsers ? (
          <div>Error:{errorUsers}</div>
        ) : users.length === 0 ? (
          <div>No se encontr?? al usuario</div>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
