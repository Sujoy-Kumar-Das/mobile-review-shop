import React from 'react';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Registration;