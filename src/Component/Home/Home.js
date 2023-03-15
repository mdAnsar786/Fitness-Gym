import React from 'react';
import Swipable from './../Swipable/Swipable';
import About from './../About/About';
import Shop from './../Shop/Shop';
import Service from './../Service/Service';
import Traning from './../Traning/Traning';
import Testimonal from './../Testimonal/Testimonal';
import Blog from './../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Swipable />
            <About />
            <Shop />
            <Service />
            <Traning/>
            <Testimonal />
            <Blog />
        </div>
    );
};

export default Home;