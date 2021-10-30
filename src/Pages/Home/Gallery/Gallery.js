import React from 'react';
import './Gallery.css'
import travel1 from '../../../img/travel_site_img/travel-1.jpg'
import travel2 from '../../../img/travel_site_img/travel-2.jpg'
import travel3 from '../../../img/travel_site_img/travel-3.jpg'
import travel4 from '../../../img/travel_site_img/travel-4.jpg'

const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className="text-center mb-5">Travelling Gallery</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="gallery-box">
                        <img src={travel1} alt="" />
                        <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="gallery-box">
                        <img src={travel2} alt="" />
                        <h4>Eiffel Tower</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="gallery-box">
                        <img src={travel3} alt="" />
                        <h4>Victoria pek</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="gallery-box">
                        <img src={travel4} alt="" />
                        <h4>Hong Kong</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;