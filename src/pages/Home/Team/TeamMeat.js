import React from 'react';

const TeamMeat = () => {
    return (
        <div>
            <div className='text-center text-2xl text-primary font-bold my-8'>
                <h1>Our Team Member</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <img src="https://www.shutterstock.com/image-photo/headshot-young-handsome-european-caucasian-260nw-1180874644.jpg" alt="" className="rounded-xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MR Shek</h2>
                        <p>specialist For photograpy weddign and event</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Khan Shaheb</h2>
                        <p>specialist for commercial photography</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClsLE-m9V8qKqIx6kpb7CfOfCahia7Lp7TtsmQq2nSjxJmXaiZAMNgAcWSE39O39UkvE&usqp=CAU" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Chowdhuri</h2>
                        <p>specialist for editorial photography</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMeat;