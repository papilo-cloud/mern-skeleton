import { useState } from 'react'
import { create } from '../../auth/api-auth'
import { Card, CardContent } from '../../core/Card/index'
import {FormField, TextField, TextArea, HelperText} from '../../core/Form/index'
import {ButtonText, Button} from '../../core/Button/index.ts'
import Dialog from '../../core/DialogBox/index.ts'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    subject: '',
    open: false,
    error: ''
  })

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
      subject: values.subject || undefined,
    }

    create(user).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, error:'', open: true})
      }
    })
  }

  return (
    <>
    <Card>
      <CardContent>
        <p className='font-semibold text-xl'>Sign Up</p>
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
      </CardContent>
    </Card>
    {values.open &&<Dialog.Root closeButton>
      <Dialog.Title>New Account</Dialog.Title>
      <Dialog.Content>
        <Dialog.ContentText>New account  successfully created</Dialog.ContentText>
      </Dialog.Content>
      <Dialog.Action>
        <Button open>
          <Link to={'/signin'}>
            <ButtonText>sign in</ButtonText>
          </Link>
        </Button>
      </Dialog.Action>
    </Dialog.Root>}
    </>
    
  )
}

export default Signup