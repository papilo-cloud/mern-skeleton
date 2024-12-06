import axios from 'axios'

const list = async () => {
    try {
        let response = await axios.get('/api/users')
        return response
    } catch (error) {
        return error.response
    }
}

const read = async (params, credentials, signal) => {
    try {
        const response = await axios.get(`/api/users/${params}`, {
            signal,
            headers: {
                Authorization: `Bearer ${credentials}`
            }
        })
        return  response
    } catch (err) {
        return err.response
    }
}

const update = async (params, credentials, user) => {
    try {
        const response = await axios.put(`/api/users/${params}`, user, {
            headers: {
                Authorization: `Bearer ${credentials}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}

const remove = async (params, credentials) => {
    try {
        const response = await axios.delete(`/api/users/${params}`, {
            headers: {
                Authorization: `Bearer ${credentials}`
            }
        })
        return response
    } catch (err) {
        return err.response.data
    }
}

export { list, read, update, remove }