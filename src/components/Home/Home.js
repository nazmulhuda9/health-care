import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HomeProduct from '../HomeProduct/HomeProduct';
import "./Home.css"


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="App text-primary pt-4"> <hr />
                <h1 className=" fw-bolder fs-1">Our Services</h1><hr />
            </div>
            <div className="home pt-5">
                {
                    data.map(product => <HomeProduct
                        key={product.id}
                        product={product}
                    ></HomeProduct>)
                }
            </div>
        </div>
    );
};

export default Home;