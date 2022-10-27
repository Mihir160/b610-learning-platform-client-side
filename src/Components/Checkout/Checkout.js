import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData()
    const { title, price, rating } = checkout
    return (
        <div className="h-screen grid grid-cols-3 ">
            
            <div>

            </div>
            <div className="text-center mt-28 lg:h-56  h-72 w-full p-4 shadow-2xl rounded-lg  bg-gray-800 ">
            
                    <h1 className='text-3xl font-bold text-orange-800'>Check Out</h1>
                    <h2 className='text-2xl text-white font-bold'>{title}</h2>
                    <p className='text-xl text-white font-bold'>Price: <span className='text-orange-500'>{price}</span> </p>
                    <p className='text-xl  text-white font-bold'>Rating: <span className='text-orange-500'>{rating}</span> </p>
             
            </div>
            <div>

            </div>
        </div>
    );
};

export default Checkout;