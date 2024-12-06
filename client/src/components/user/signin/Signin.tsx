import { Card, CardContent } from '../../core/Card/index'
import { FormField, TextField, HelperText } from '../../core/Form/index'
import {ButtonText, Button} from '../../core/Button/index.ts'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/Context.tsx'


const Signin = () => {

  const {auth} = useAuth()
  console.log(useAuth())
  const handleChange = (name) => (event) => {
    auth.setValues({
      ...auth.values,
      [name]: event.target.value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    auth.onSignin(auth.values)
  }

  const navigate = useNavigate()
  const {from} = useLocation().state || {
      from: {
        pathname: '/',
      }
  }

  console.log(from)

  useEffect(() => {
    const {redirectToReferrer} = auth.values
    
    if (redirectToReferrer) {
      navigate(from)
    }
  
  }, [auth.values.redirectToReferrer])
 
  

  return (
    <Card>
      <CardContent>
        <p className='font-semibold text-xl'>Sign In</p>
        <FormField className='gap-4' onSubmit={handleSubmit}>
          <TextField 
            className='py-2'
            placeholder='Email'
            type='email'
            value={auth.values.email}
            onChange={handleChange('email')}/>
          <TextField
            className='py-2'
            placeholder='Password'
            type='Password'
            value={auth.values.password}
            onChange={handleChange('password')} />
          {auth.values.error && <HelperText>{auth.values.error}</HelperText>}
          <Button type='submit'>
            <ButtonText>Submit</ButtonText>
          </Button>
        </FormField>
      </CardContent>
    </Card>
  )
}

export default Signin