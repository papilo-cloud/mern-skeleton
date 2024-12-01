import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import Home from './components/core/home/Home'
import Users from './components/user/users/Users'
import SignOut from './components/user/signout/SignOut'
import { Context } from './context/Context'
import Signin from './components/user/signin/Signin'
import Signup from './components/user/signup/Signup'
import Profile from './components/user/Profile'

function App() {

  const {login} = useContext(Context)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='/users' element={ <Users /> } />
          <Route path='/signout' element={ <SignOut />} />
          <Route path='/signin' element={<Signin /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
