import React, { useState } from 'react'
import './signup.css'
import { create } from '../../auth/api-auth'

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
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
      subject: values.subject || undefined,
    }
    create(user).then((data, error) => {
      if (data.err) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, error:'', open: true})
      }
      console.log(data, error)
    })
    event.preventDefault()
  }

  return (
    <div className='signup'>
      <span>Sign Up</span>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <input 
            type="text"
            placeholder='Name'
            value={values.name}
            onChange={handleChange('name')}
             />
        </label>
        <label>
          <input 
            type="email"
            placeholder='Email'
            value={values.email}
            onChange={handleChange('email')}
             />
        </label>
        <label>
          <input 
            type="password"
            placeholder='Password'
            value={values.password}
            onChange={handleChange('password')}
             />
        </label>
        <label>
          <textarea 
            placeholder='Subject'
            value={values.subject}
            onChange={handleChange('subject')}
             />
        </label>
        {values.error && <span className='error'>Something went wrong!</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup