import React, { useEffect, useState } from 'react'
import { auth } from '../auth/auth-helper'
import { read } from '../user/api-user'
import { Navigate, useLocation, useParams } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    created: ''
  })
  const [redirectToSignIn, setRedirectToSignIn] = useState(false)
  
  const {userId} = useParams()
  const location = useLocation()
  useEffect(() => {
  const jwt = auth.isAuthenticated()
  read(userId, jwt.token)
    .then(response => {
      if (response.status != 200) {
        setRedirectToSignIn(true)
      } else {
        setUser(response.data)
      }
      console.log(response)
    })
  }, [userId])

  if (redirectToSignIn) {
    return <Navigate to='/signin' state={{from: location}} />
  }
  return (
    <div className='flex flex-col gap-4 mt-20'>
      <h3 className='text-xl font-medium text-[tomato]'>Profile</h3>
      <div className='flex gap-2 border-b'>
        <ul className='flex flex-col'>
          <li className=' font-medium text-lg'>{ user.name}</li>
          <li className=' opacity-70'>{user.email}</li>
        </ul>
        <div className='flex gap-4'>

        </div>
      </div>
      <p>Joined: {new Date(user.created).toDateString()} </p>
    </div>
  )
}

export default Profile