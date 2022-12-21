import Lottie from "lottie-react";
import React from 'react';
import {FaCheckCircle } from "react-icons/fa";
import coding from '../../../src/coding.json'
const Member = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Become a Code-Stack Member

                            </h2>
                            <p className="text-base font-bold text-gray-700 md:text-lg">
                                Benefits
                            </p>
                            <div className='flex items-center gap-3'>
                                <FaCheckCircle className='text-green-600'></FaCheckCircle><p>Earn dev coins which can be used to purchase gadgets or cash out in BDT</p>
                            </div>
                            <div className='flex items-center gap-3 mt-2'>
                                <FaCheckCircle className='text-green-600'></FaCheckCircle><p>Get notified vai email, about upcoming course/contest/event</p>
                            </div>
                            <div className='flex items-center gap-3 mt-2'>
                                <FaCheckCircle className='text-green-600'></FaCheckCircle><p>Get latest news of the IT industry</p>
                            </div>
                            <div className='flex items-center gap-3 mt-2'>
                                <FaCheckCircle className='text-green-600'></FaCheckCircle><p>Your own dashboard to access your course details, assignments, etc.</p>
                            </div>
                        </div>

                    </div>
                    <div className="relative lg:w-1/2">
                     
                     < Lottie animationData={coding}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;