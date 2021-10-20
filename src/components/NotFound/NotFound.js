import React from 'react';
import Eror from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className="h-75">
            <img src={Eror} class="img-fluid" alt="..." />
        </div>
    );
};

export default NotFound;