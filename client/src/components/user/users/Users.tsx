import { useEffect, useState } from 'react'
import { list } from '../api-user'
import Profile from '../../icons/profile'
import RightArrow from '../../icons/RightArrow'
import {Card, CardContent} from '../../core/Card/index'

const Users = () => {
    const [users, setUsers] = useState<any>([])

    useEffect(() => {
    list()
        .then(data => {
            setUsers(data)
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
                            key={user.name}>
                            <li className=' cursor-pointer flex-0'>
                                <Profile className='w-10' />
                            </li>
                            <li className=' cursor-pointer flex-1'>
                                {user.name}
                            </li>
                            <li className=' cursor-pointer flex-1'>
                                <RightArrow className=' absolute top-1 right-0' width={'30px'} height={'30px'} />
                            </li>
                    </ul> ) 
                }
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default Users