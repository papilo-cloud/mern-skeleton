import { createContext, useState } from "react"

// const INITIAL_STATE = {
//     login: true
// }

interface ContextProps {
    isLogedIn: () => void
    login: boolean
}

export const Context = createContext({} as ContextProps)

export const ContextProvider = ({children}) => {
    const [login, setLogin] = useState(true)

    const isLogedIn = () => setLogin(false)
    return(
        <Context.Provider value={{
           isLogedIn,
           login
        }}>
            {children}
        </Context.Provider>
    )
}