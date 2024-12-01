import React, { useContext } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

const Topbar = () => {
    const {login, setLogin} = useContext(Context)

    return (
        <div className='topbar'>
            <nav>
                <Link to='/'>
                    <span>MERN Skeleton</span>
                </Link>
            </nav>
            <ul>
                
                <li>
                    <Link to='/users'>users</Link>
                </li>
                {login? <li><Link to='/profile'>my profile</Link></li>:
                    <li><Link to='/signup'>Sign Up</Link></li>
                    }
                {
                    login?
                    <li><Link to='/signout'>sign out</Link></li>:
                    <li><Link to='/signin'>sign In</Link></li>

                }
            </ul>
        </div>
    )
}

export default Topbar