import React, { createContext, useState } from 'react';
export const ThemContextProvider = createContext();
const ThemContext = ({children}) => {
    const [dark,setDark] = useState(false)
    const info = {dark,setDark}
    return (
        
        <ThemContextProvider.Provider value={info} >
            {children}
        </ThemContextProvider.Provider>
    );
};

export default ThemContext;