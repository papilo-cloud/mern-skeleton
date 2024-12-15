import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/Layout.tsx'
import Home from './components/core/home/Home.tsx'
import Users from './components/Templates/users/Users.tsx'
import Signin from './components/Templates/signin/Signin.tsx'
import Signup from './components/Templates/signup/Signup.tsx'
import Profile from './components/Templates/Profile.tsx'
import PrivateRoute from './components/auth/PrivateRoute.tsx'
import EditProfile from './components/Templates/EditProfile.js'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path='/user/:userId' element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } >
          </Route>
          <Route path='/users' element={ <Users /> } />
          <Route path='/signin' element={<Signin /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/user/edit/:userId' element={ 
            <PrivateRoute>
              <EditProfile /> 
            </PrivateRoute>
           } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
