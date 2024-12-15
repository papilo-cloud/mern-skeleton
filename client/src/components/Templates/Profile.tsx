import { useEffect, useState } from 'react'
import { auth } from '../auth/auth-helper.js'
import { read, remove } from './api-user.ts'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileIcon from '../icons/ProfileIcon.tsx'
import EditIcon from '../icons/EditIcon.tsx'
import DeleteIcon from '../icons/DeleteIcon.tsx'
import Dialog from '../core/DialogBox/index.ts'
import { Button, ButtonText } from '../core/Button/index.ts'
import { useAuth } from '../../context/Context.tsx'


const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    created: '',
    _id: '',
    about: '',
    photo: ''
  })

  const PF = 'http://localhost:3000/uploads/'
  
  const jwt = auth.isAuthenticated()
  const {userId} = useParams()
  const {signout} = useAuth().auth
  const navigate = useNavigate()

  useEffect(() => {
    read(userId, jwt.token)
      .then(response => {
        if (response.status != 200) {
          console.log(user)
        } else {
          setUser(response.data)
        }
      })
  }, [userId])

  const handleClick = () => {
    setIsOpen(!isOpen)    
  }

  const handleDeleteAccount = () => {
    remove(userId, jwt.token).then(response => {
      if (response.status != 200) {
        console.log(response)
      } else {
        signout(() => navigate('/', {replace: true}))
      }
    })
  }

  const handleEdit = () => {
    navigate(`/user/edit/${jwt.user.id}`)
  }


  return (
    <>
    <div className='relative flex w-full min-h-[80vh] justify-center items-center mt-20'>
      <div className='flex flex-col drop-shadow-md rounded p-5 bg-white'>
          <h3 className='text-xl font-medium text-[#c14832]'>Profile</h3>
          <div className='relative flex items-center justify-center gap-3 border-b-2 p-4'>
            <div className='relative bg-gray-400 rounded-full flex items-center justify-center w-14 h-14 '>
              {
                user.photo ?
                  <img
                    className='rounded-full'
                    src={PF+user.photo} alt="user-photo" 
                    /> :
                  <ProfileIcon width={'50px'} />
              }
            </div>
            <ul className='flex flex-col mr-20'>
              <li className=' font-medium text-lg'>{ user.name}</li>
              <li className=' opacity-70'>{user.email}</li>
            </ul>
            { jwt.user && jwt.user.id == user._id &&
                <div className='flex gap-5'>
                  <button onClick={handleEdit}>
                    <EditIcon width={20} height={20} />
                  </button>
                  <button onClick={handleClick}>
                    <DeleteIcon width={20} height={20} />
                  </button>
                
              </div>
            }
          </div>
          <div className='border-b-2 p-2'>
            <p>{user.about}</p>
            <p className='opacity-70'>Joined: {new Date(user.created).toDateString()} </p>
          </div>
      </div>
    </div>
    {
      isOpen && (
        <Dialog.Root>
            <Dialog.Title>Delete Content</Dialog.Title>
            <Dialog.Content>
                <Dialog.ContentText>Confirm to delete your account.</Dialog.ContentText>
            </Dialog.Content>
            <Dialog.Action>
              <Button onClick={handleClick} className='bg-transparent'>
                  <ButtonText className='text-[#262423]'>Cancel</ButtonText>
              </Button>
              <Button onClick={handleDeleteAccount} className='bg-transparent'>
                  <ButtonText className='text-red-500'>Confirm</ButtonText>
              </Button>
            </Dialog.Action>
        </Dialog.Root>
      )
    }
    </>
  )
}

export default Profile