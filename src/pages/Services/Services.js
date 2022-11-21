import React, { useEffect, useState } from 'react';
import ServiceItem from '../Home/Services/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='w-3/4 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }

            </div>
        </div>
    );
};

export default Services;