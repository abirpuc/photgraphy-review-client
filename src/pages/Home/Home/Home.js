import React from 'react';
import UseTitle from '../../../hook/UseTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TeamMeat from '../Team/TeamMeat';

const Home = () => {
    UseTitle('home')
    return (
        <div className='w-3/4 mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <TeamMeat></TeamMeat>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;