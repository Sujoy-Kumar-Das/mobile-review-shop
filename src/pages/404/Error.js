import React, { useContext } from 'react';
import ErrorImage from '../../assets/errorPage2.png'

import { ThemContextProvider } from '../../context/themContext/ThemContext';
const Error = () => {
    const {dark} = useContext(ThemContextProvider)
    return (
        <div className={`${dark ?' bg-slate-950':' bg-base-200'}`}>
            <img src={ErrorImage} className=' w-screen' alt="" />
        </div>
    );
};

export default Error;