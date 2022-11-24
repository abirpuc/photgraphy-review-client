import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-20'>
            <div className='text-center font-bold'>
                <h1 className='text-2xl text-primary'>Our Services</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    services.slice(0,3).map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
            <div className='text-center my-6'>
                <Link to="/services">
                    <button className='btn btn-outline btn-primary'>See More</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;