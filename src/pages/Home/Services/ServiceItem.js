import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../../hook/UseTitle';

const ServiceItem = ({ service }) => {
    UseTitle('Services');
    const { _id, img, name, description } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <img src={img} alt="Shoes" className='p-4 rounded-[2.5rem] h-25' />
            <div className="card-body">
                <h2 className="card-title text-primary font-bold">{name}</h2>
                <p>{
                    description ? description.slice(0, 100) : description
                }</p>
                <div className="card-actions justify-end">
                    <Link to={`/detailsservices/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;