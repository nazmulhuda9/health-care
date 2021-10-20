import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, photo, description } = props.service;

    return (
        <div className="container">
            <div className=" product border-radius">
                <img src={photo} className="img-fluid" alt="..." />
                <div className="r pt-2">
                    <h3 className="text-primary">{name}</h3>
                    <p className="fw-bold">{description}</p>
                </div>
                <Link to={`/details/${id}`}>
                    <button className="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;