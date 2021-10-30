import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMapMarkedAlt,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";
import {
    faRocketchat
    
  } from "@fortawesome/free-brands-svg-icons";
  import "./contact.css"
  import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <hr className="mt-0 pt-0 text-warning"/>
        <div className="container text-center mt-5">
            <h3 className="fw-bold">Contact US</h3>
            <div className="d-flex align-items-center justify-content-center">
                <NavLink to ="/home" className="nav-style">Home</NavLink>/
                 <NavLink to ="/contact" className="nav-style">Contact</NavLink>
            </div>

        </div>
             {/* Contact us form  */}

             <section className="py-lg-5 h-100 container">
                <div className="contact">
                    <div className="container text-color">
                       <div className="mb-5 text-center">
                          <h5> Let's Start a conversation!</h5>
                          <h2 className="fw-bold">Contact Us</h2>
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 text-colors">
                            <h4 className="fw-bold">Contact Info</h4>
                            <ul className="info list-unstyled">
                                <li className="d-flex align-items-center">
                                   <span className="pe-3"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
                                    <p><a href="/">4967 Sardis Sta, <br />
                                        Victoria 8007, Montreal., </a></p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="pe-1"><FontAwesomeIcon icon={faMobileAlt} /></span>
                                    <p><a href="/">+1 246-345-0695</a></p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="pe-3 mt-0"><FontAwesomeIcon icon={faEnvelopeOpenText} /></span>
                                    <p ><a href="/">info@learup.in</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7 pt-lg-o pt-4">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email adress"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                           <textarea className="textarea" name="masseage" id="" cols="30" rows="4" placeholder="Enter Your masseage"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                           <button className="btn btn-bg-color fw-bold"><span className="pe-1"><FontAwesomeIcon icon={faRocketchat} /></span>Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;