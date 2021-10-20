import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="App text-primary pt-4">
                <h1 className=" fw-bolder fs-1">Our Services</h1><hr />
            </div>
            <div className="home">
                {
                    data.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;