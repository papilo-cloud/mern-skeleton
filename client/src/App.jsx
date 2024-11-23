import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const post = await axios.get('http://localhost:3000/api/users')
      console.log(post.data)
      setCount(post.data)
    }
    fetchPost()
  }, [])
  

  return (
    <>
      {count.map(c => <li>{c.password } </li> )}
    </>
  )
}

export default App
