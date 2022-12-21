import React from 'react';

const WhyCodeStack = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">

                            <span className="relative">Why CODE-STACK Skill?</span>
                        </span>{' '}

                    </h2>

                </div>
                <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">

                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Experienced Instructors</h6>
                            <p className="text-sm text-gray-900">
                                With more than 10 years of experience of working in the IT industry, we intend to share with you what works
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">
                                Career Guidance
                            </h6>
                            <p className="text-sm text-gray-900">
                                You will be guided to prepare yourself for the IT industry
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Online</h6>
                            <p className="text-sm text-gray-900">
                                No need to waste time in traffic jam. A good internet connection is all you need to start learning!
                            </p>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
    );
};

export default WhyCodeStack;