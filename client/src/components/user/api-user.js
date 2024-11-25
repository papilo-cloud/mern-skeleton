import axios from 'axios'
const create = async (user) => {
    try {
        let response = await axios.post('/api/users/register', user)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const list = async (signal) => {
    try {
        let response = await axios.get('/api/users', {signal})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const read = async (params, credentials, signal) => {
    try {
        const response = await axios.get(`/api/users/${params.userId}`, {
            signal,
            headers: {
                Authorization: `Bearer ${credentials.t}`
            }
        })
        return  response.data
    } catch (err) {
        console.log(err)
    }
}

const update = async (params, credentials, user) => {
    try {
        const response = await axios.put(`/api/users/${params.userId}`, user, {
            headers: {
                Authorization: `Bearer ${credentials.t}`
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const remove = async (params, credentials) => {
    try {
        const response = await axios.delete(`/api/users/${params.userId}`, {
            headers: {
                Authorization: `Bearer ${credentials.t}`
            }
        })
    } catch (err) {
        console.log(err)
    }
}