import { useContext } from 'react'
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
    <div className='mt-40'>
        <button className='border-2 rounded-sm bg-gray-400 p-2' onClick={handleNavigate}>
            Sign Out
        </button>
    </div>
  )
}

export default SignOut