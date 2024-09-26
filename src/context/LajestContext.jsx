import React, {createContext} from 'react'
import {devices} from '../assets/assets'

export const LajestContext = createContext();

const LajestContextProvider = (props) => {
    
    const currency = "$";


    const value = {
       devices,
       currency
    }

    return (
        <LajestContext.Provider value={value}>
            {props.children}
        </LajestContext.Provider>
    )
}

export default LajestContextProvider;