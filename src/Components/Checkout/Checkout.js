import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData()
    const { title, price, rating } = checkout
    return (
        <div className="h-screen">

            <div className="text-center mt-28 ">
                <h1 className='text-3xl font-bold text-orange-800'>Check Out</h1>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-xl font-bold'>Price: <span className='text-orange-500'>{price}</span> </p>
                <p className='text-xl font-bold'>Price: <span className='text-orange-500'>{rating}</span> </p>
            </div>
        </div>
    );
};

export default Checkout;