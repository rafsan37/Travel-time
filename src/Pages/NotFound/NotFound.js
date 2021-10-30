import React from 'react';
import './NotFound.css'
import pageNotFound from '../../img/notfound.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        // 404 page 
        <div className="page ">
            <div className="container">
            <div className="errorpage">
            <p>Sorry, This page doesn't exsit </p>
            </div>
            <img src={pageNotFound} alt="" className="img-fluid img-2" 
            />
            <div className="text-center">
               <Link to="/home"><button className="custom-btn btn-13 px-4 py-2 rounded mb-5">Go Back</button></Link>
            </div>
        </div>   
        </div>
    );
};

export default NotFound;