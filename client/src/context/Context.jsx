import { createContext, useState } from "react"

// const INITIAL_STATE = {
//     login: true
// }

export const Context = createContext(true)

export const ContextProvider = ({children}) => {
    const [login, setLogin] = useState(true)
    return(
        <Context.Provider value={{
            login,
            setLogin
        }}>
            {children}
        </Context.Provider>
    )
}