import React from 'react';
import image from '../../images/about.jpg'

const About = () => {
    return (
        <div>
            <div class="container overflow-hidden p-5">
                <div class="row gx-5">
                    <div class="col">
                        <div>
                            <img src={image} class="img-thumbnail" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3  bg-light">
                            <h1 className="text-primary">Trusted Health Care</h1>
                            <p></p>
                            <p>There are 20 Doctor, 45 Nurse and 300 Bed. We always try to the best service. Let us be the ones who say we do not accept that a child dies every three seconds simply because he does not have the drugs you and we have. ... </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;