import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Discount></Discount>
        </div>
    );
};

export default Home;