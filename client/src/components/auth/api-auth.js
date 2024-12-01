import axios from "axios"

const create = async (user) => {
    try {
        let response = await axios.post('/api/auth/register', user)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const signin = async (user) => {
    try {
        let response = await axios.post('/api/auth/signin', user, {
            headers: {
                Accept: 'application/json'
            },
            
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const signout = async () => {
    try {
        let response = await axios.get('/api/auth/signout')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export {signin, signout, create}