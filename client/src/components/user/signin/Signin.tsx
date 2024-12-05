import { Card, CardContent } from '../../core/Card/index'
import { FormField, TextField, HelperText } from '../../core/Form/index'
import {ButtonText, Button} from '../../core/Button/index.ts'
import { signin } from '../../auth/api-auth'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Signin = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
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
      email: values.email || undefined,
      password: values.password || undefined
    }
    signin(user).then(data => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, error: '', redirectToReferrer: true})
      }
    })
  }

  const navigate = useNavigate()
  const {from} = useLocation().state || {
      from: {
        pathname: '/',
      }
  }

  console.log(from)

  useEffect(() => {
    const {redirectToReferrer} = values
    
    if (redirectToReferrer) {
      navigate(from)
    }
  
  }, [values.redirectToReferrer])
 
  

  return (
    <Card>
      <CardContent>
        <p className='font-semibold text-xl'>Sign In</p>
        <FormField className='gap-4' onSubmit={handleSubmit}>
          <TextField 
            className='py-2'
            placeholder='Email'
            type='email'
            value={values.email}
            onChange={handleChange('email')}/>
          <TextField
            className='py-2'
            placeholder='Password'
            type='Password'
            value={values.password}
            onChange={handleChange('password')} />
          {values.error && <HelperText>{values.error}</HelperText>}
          <Button type='submit'>
            <ButtonText>Submit</ButtonText>
          </Button>
        </FormField>
      </CardContent>
    </Card>
  )
}

export default Signin