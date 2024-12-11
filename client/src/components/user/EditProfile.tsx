import { useEffect, useState } from 'react'
import { auth } from '../auth/auth-helper'
import { Card, CardContent } from '../core/Card/index'
import { FormField, HelperText, TextArea, TextField, TextLabel } from '../core/Form/index'
import { Button, ButtonText } from '../core/Button/index'
import { update, upload } from './api-user'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileIcon from '../icons/ProfileIcon'

const EditProfile = () => {
    const [values, setValues] = useState({
      name: '',
      password: '',
      email: '',
      about: '',
      file: null,
      redirectToProfile: false,
      userId: '',
      error: ''
    })

    const handleChange = (name) => (event) => {
      const value = name == 'file' ?
        event.target.files[0] : event.target.value
      setValues({
        ...values,
        [name]: value
      })
    }

    const jwt = auth.isAuthenticated()
    const navigate = useNavigate()
    const {userId} = useParams()

    const handleSubmit = (event) => {
      event.preventDefault()
      const user = {
        name: values.name || undefined,
        email: values.email || undefined,
        password: values.password || undefined,
        about: values.about || undefined,
      }

      if (values.file) {
        const data = new FormData()
        const filename: any = Date.now() + values.file['name']
        data.append('name', filename)
        data.append('file', values.file)
        user['photo'] = filename

        upload(data).then(res => {
          if (res.status != 200) {
            console.log(res)
          }
        })
      }
      
      update(userId, jwt.token, user).then(data => {
        if (data.error) {
          setValues({...values, error: data.error})
        } else {
          setValues({...values, userId: data._id, redirectToProfile: true})
        }
      })
    }

    useEffect(() => {
      if (values.redirectToProfile) {
        navigate(`/user/${values.userId}`, {replace: true})
      }
    }, [values.redirectToProfile])

    return (
    <Card>
        <CardContent>
            <p className='font-semibold text-xl text-[tomato]'>Edit Profile</p>
            <span className=' bg-gray-400 rounded-full flex items-center p-1'>
                <ProfileIcon width={'50px'} />
            </span>
        </CardContent>
        <FormField className='gap-4' onSubmit={handleSubmit}>
            <TextLabel className='mt-2'>
                <span 
                  tabIndex={10}
                  className='py-2 px-3 shadow-md cursor-pointer bg-gray-300 rounded'>Upload</span>
                <span>
                  {values.file ? values.file['name']: ''}
                </span>
                <input type="file" style={{
                    display: 'none'
                  }}
                  onChange={handleChange('file')}
                />
            </TextLabel>
            <TextField
                className='py-2'
                placeholder={jwt.user.name}
                type='text'
                value={values.name}
                onChange={handleChange('name')} />
            <TextField
                className='py-2'
                placeholder='Email'
                type='email'
                value={values.email}
                onChange={handleChange('email')} />
            <TextField
                className='py-2'
                placeholder='Password'
                type='Password'
                value={values.password}
                onChange={handleChange('password')} />
            <TextArea
                placeholder={jwt.user.about}
                value={values.about}
                onChange={handleChange('about')}/>
            {values.error && <HelperText>{values.error}</HelperText>}
            <Button type='submit'>
                <ButtonText>Submit</ButtonText>
            </Button>
        </FormField>
    </Card>
  )
}

export default EditProfile