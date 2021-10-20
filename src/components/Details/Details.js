import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    let { id } = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setDetails(data.details))
    }, [])

    return (
        <div className="pt-5 details2">
            {
                details.map(detail => detail.id == id ? <div className="details">
                    <h3 className='text-primary'> Treatement: {detail.name}</h3>
                    <h3>Doctor: {detail.doctor}</h3>
                    <h4>Day: {detail.day}</h4>
                    <h4>Fees: {detail.fees}</h4>
                </div> :
                    <div></div>)
            }
        </div>
    );
};

export default Details;