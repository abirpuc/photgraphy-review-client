import React from 'react';

const Review = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-2xl text-primary font-bold text-center my-8'>Our Happy Customer Say</h1>
            <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto my-4">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto my-4">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto my-4">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;