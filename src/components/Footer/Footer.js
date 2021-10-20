import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 bg-dark text-white">
                <div className="col">  <Navbar fixed="bottom" />
                    <div className="card-body">
                        <h3 className="card-title">Trusted health Care</h3>
                        <div>

                            <i className="fab fa-facebook-square me-4"></i>
                            <i className="fab fa-instagram-square m-4"></i>
                            <i className="fab fa-twitter-square m-3 "></i>
                            <i className="fab fa-youtube-square ms-4"></i>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card-body">
                        <h3 className="card-title">Support</h3>
                        <div>

                            <p>Contact Us</p>
                            <p>FAQ</p>
                            <p>About us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;