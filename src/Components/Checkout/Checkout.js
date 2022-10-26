import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData()
    const { title, description } = checkout
    return (
        <div className="card h-full bg-base-100 shadow-xl">

            <div className="card-body">
                <h2 className="card-title">{title}</h2>


            </div>
        </div>
    );
};

export default Checkout;