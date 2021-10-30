import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css"

const Service = ({service}) => {
    const {name, img, description, price, _id, duration} = service;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card card-container mt-5 mx-auto " style= {{width: '22rem'}}>
                    <img className="card-img-top img-size " src={img} alt="Card"/>
                <div className="card-body service">
                    <h5 className="text-center card-title text-info">{name}</h5>
                    <p className="text-center fs-3 mt-2">{description.slice(0, 74)} </p>
                    <p className="text-center fs-5 mt-2">Time: <span className="text-warning">{duration}</span> </p>
                    <p className="text-center fs-3 mt-2">Price: ${price} </p>
                    <div className="text-center">
                         <Link to={`/details/${_id}`}>
                         <button className="custom-btn btn-5"><span>Book Now</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;