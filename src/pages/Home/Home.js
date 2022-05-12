import React from 'react';
import PopularBrands from '../../PopularBrands/PopularBrands';
import OurLocation from '../OurLocation/OurLocation';
import Banner from './Banner/Banner';
import Stocks from './Stocks/Stocks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stocks></Stocks>
            <OurLocation></OurLocation>
            <PopularBrands></PopularBrands>
        </div>
    );
};

export default Home;