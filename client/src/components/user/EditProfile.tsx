import { useEffect, useState } from 'react'
import { auth } from '../auth/auth-helper'
import { Card, CardContent } from '../core/Card/index'
import { FormField, HelperText, TextArea, TextField } from '../core/Form/index'
import { Button, ButtonText } from '../core/Button/index'
import { update } from './api-user'
import { useNavigate, useParams } from 'react-router-dom'

const EditProfile = () => {
    const [values, setValues] = useState({
      name: '',
      password: '',
      email: '',
      subject: '',
      redirectToProfile: false,
      userId: '',
      error: ''
    })

    const handleChange = (name) => (event) => {
      setValues({
        ...values,
        [name]: event.target.value
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
        subject: values.subject || undefined,
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
        </CardContent>
        <FormField className='gap-4' onSubmit={handleSubmit}>
            <TextField
                className='py-2'
                placeholder='Name'
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
                placeholder='About'
                value={values.subject}
                onChange={handleChange('subject')}/>
            {values.error && <HelperText>{values.error}</HelperText>}
            <Button type='submit'>
                <ButtonText>Submit</ButtonText>
            </Button>
        </FormField>
    </Card>
  )
}

export default EditProfile