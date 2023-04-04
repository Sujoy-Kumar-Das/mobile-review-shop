import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Banner from './banner/Banner';
import Products from '../products/Products';
import About from '../about/About';


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
        </div>
    );
};

export default Home;