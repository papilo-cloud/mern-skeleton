import { useEffect, useState } from 'react'
import { list } from '../api-user'
import ProfileIcon from '../../icons/ProfileIcon'
import RightArrow from '../../icons/RightArrow'
import {Card, CardContent} from '../../core/Card/index'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState<any>([])

    useEffect(() => {
    list()
        .then((response) => {
            if (response?.status !=  200) {
                console.log(response)
            } else {
                setUsers(response.data)
            }
        })
    }, [])
    
    return (
        <Card className='p-5'>
            <CardContent className=' p-5 bg-white rounded drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                <h1 className=' text-xl font-medium self-start text-left'>All Users</h1>
                <CardContent className='users'>
                {
                    (users || []).map(user =>       
                        <ul
                            className='relative flex items-center justify-center m-0 p-0 w-full'
                            key={user._id}>
                            <li className=' cursor-pointer flex-0'>
                            <span className=' bg-gray-400 rounded-full flex items-center p-1'>
                                <ProfileIcon width={'50px'} />
                            </span>
                            </li>
                            <li className='text-lg font-medium cursor-pointer ml-2 flex-1'>
                                {user.name}
                            </li>
                            <li className=' cursor-pointer flex-1'>
                                <Link to={`/user/${user._id}`}>
                                    <RightArrow className=' absolute top-1 right-0' width={'30px'} height={'30px'} />
                                </Link>
                            </li>
                    </ul> ) 
                }
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default Users