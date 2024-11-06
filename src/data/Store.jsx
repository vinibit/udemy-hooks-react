import React, { createContext, useReducer, useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}
const AppContext = createContext(initialState);

const AppStore = ({ children }) => {    
    
    const [state, setState] = useState(initialState);
    
    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        });
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: number => updateState('number', number),
            setText: text => updateState('text', text)
        }}>
            {children}
        </AppContext.Provider>
    )
};

export { AppContext }
export default AppStore;