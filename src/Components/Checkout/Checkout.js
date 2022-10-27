import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData()
    const { title, description } = checkout
    return (
        <div className="h-screen">

            <div className="text-center mt-28 ">
                <h1 className='text-3xl font-bold'>Check Out</h1>
                <h2 className='text-2xl font-bold'>{title}</h2>
                
            </div>
        </div>
    );
};

export default Checkout;