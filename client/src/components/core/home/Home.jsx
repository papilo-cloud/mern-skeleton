import React, { useContext } from 'react'
import './home.css'
import { Context } from '../../../context/Context'
const Home = () => {
    const user = useContext(Context)
    // console.log(user)
    
  return (
    <div className='home'>
        <h1>Hello world</h1>
    </div>
  )
}

export default Home