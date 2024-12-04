import React, { useContext } from 'react'
import './signout.css'
import { Context } from '../../../context/Context.tsx'
import { useNavigate } from 'react-router-dom'


const SignOut = () => {
  const {isLogedIn, login} = useContext(Context)


  const navigate = useNavigate()

  const handleNavigate = () => {
    isLogedIn()
    console.log(login)
    navigate('/', {replace: true})
  }

  return (
    <div className='signout'>
        <button onClick={handleNavigate}>
            Sign Out
        </button>
    </div>
  )
}

export default SignOut