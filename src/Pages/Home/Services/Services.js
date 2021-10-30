import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h1 className="text-center mt-5">choice our sevices</h1>
            <div className="container mb-5">
            <div className="row">
            {
                services.map(service => <Service key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;