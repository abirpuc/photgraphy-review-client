import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1196172395/photo/in-the-photo-studio-with-professional-equipment-portrait-of-the-famous-photographer-holding.jpg?s=612x612&w=0&k=20&c=utO4aHRyA5ZUAYxbk9NelmhR1_E5-AOWUWcqDMP-NXE=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">About</h1>
                    <p className="mb-5">A photographer is someone who is skilled at taking pictures or photographs with a camera.So we provide you a skilled camera man for taking your magnificat moment remember by taking a magnificat picture.</p>
                    {/* <button className="btn btn-primary">Learn More</button> */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;