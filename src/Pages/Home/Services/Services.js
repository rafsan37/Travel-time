import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
 const [isLoading ,setIsLoading] = useState(true)

    useEffect( () => {
        setIsLoading(true);
        fetch('https://ghoulish-skull-44107.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        .finally(()=> setIsLoading(false))
    }, [])
    if(isLoading){
        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    else{

    
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
   }
};

export default Services;