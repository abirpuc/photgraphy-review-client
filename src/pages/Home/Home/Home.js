import React from 'react';
import UseTitle from '../../../hook/UseTitle';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import TeamMeat from '../Team/TeamMeat';

const Home = () => {
    UseTitle('home')
    return (
        <div className='w-3/4 mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <TeamMeat></TeamMeat>
            <Review></Review>
        </div>
    );
};

export default Home;