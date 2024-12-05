import {auth} from './auth-helper'
import {Navigate, useLocation } from 'react-router-dom'


const PrivateRoute = ({children, ...rest}) => {
  const location = useLocation()

  return (
    <div 
      {...rest}>
      {
        auth.isAuthenticated() ? (
          children
        ) : (
          <Navigate to='/signin' state={{from: location}} />
        )
      }
      </div>
  )
}

export default PrivateRoute