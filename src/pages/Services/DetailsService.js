import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../hook/UseTitle';
import CustomerReview from '../Home/Services/CustomerReview/CustomerReview';

const DetailsService = () => {
    UseTitle('details service')
    const {_id, name,img,description } = useLoaderData()
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes"  className='w-full'/></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-primary">{name}</h2>
                    <p className='px-4 indent-4'>{description}</p>
                </div>
            </div>
            <div className='mt-10'>
                <CustomerReview name={name}></CustomerReview>
            </div>
        </div>
    );
};

export default DetailsService;