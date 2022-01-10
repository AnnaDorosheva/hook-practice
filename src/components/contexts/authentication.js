import React, {useState, createContext} from 'react';

export const authenticationContext = createContext();

const AuthenticationProvider = (props) => {
    const [authentificated, setAuthentificated] = useState(false);
    const logIn = () => {
        setAuthentificated(true);
    };
    const logOut = () => {
        setAuthentificated(false);
    };
    return (
        <authenticationContext.Provider value={{authentificated, logIn, logOut}}>
         {props.children}   
        </authenticationContext.Provider>
    )
};

export default AuthenticationProvider;
