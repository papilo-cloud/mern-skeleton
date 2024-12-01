import React, { useEffect, useState } from 'react'
import './users.css'
import profile from '../../../assets/profile.svg'
import right_arrow from '../../../assets/right-arrow.svg'
import axios from 'axios'
import { list } from '../api-user'

const Users = () => {
    const [users, setUsers] = useState([])

useEffect(() => {
    list()
        .then(data => {
            console.log(data)
            setUsers(data)
        })
  }, [])
    
  return (
    <div className='users'>
        <section>
            <h2>All Users</h2>
            <div>
                {
                    users.map(user => 
                        
                        <ul key={user.name}>
                            <li>
                                <img 
                                src={profile} 
                                alt="user-profile"
                                width={40} />
                            </li>
                            <li>{user.name}</li>
                            <li><img width={30} src={right_arrow} alt="" /></li>
                            
                        </ul> ) 

                }
            </div>
        </section>
    </div>
  )
}

export default Users