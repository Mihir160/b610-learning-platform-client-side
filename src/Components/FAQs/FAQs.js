import React, { useState } from 'react';
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 bg-gray-800">
                    <p className="text-white">{children}</p>
                </div>
            )}
        </div>
    );
};

const FAQs = () => {
    return (
        <div class="px-4 py-16 mx-auto h-screen  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl ">
                  {/* FAQs here  */}
                <div class="space-y-4 ">
                    <div className='bg-gray-800 shadow-2xl text-white rounded-xl'>
                        <Item title=" Code-Stack courses Online or Offline?">
                            Code-Stack is a 100% e-Learning platform and we only provide online courses. We have provide offline / onsite courses and we do not have any plan in near future to provide such course.
                        </Item>
                    </div>
                    <div className='bg-gray-800 shadow-2xl text-white rounded-lg'>
                        <Item title="Do you provide video recording of live classes?">
                            Yes, we provide recording with some conditions. A student needs to regularly attend classes and exams. In case of any emergency problem, student needs to inform course instructor immediately and
                            give proper explanation for his/her absence.
                        </Item>
                    </div>
                    <div className='bg-gray-800 shadow-2xl text-white rounded-lg'>
                        <Item title="How is the qualification of teachers?">
                            You can be absolutely sure. Our teachers are fully qualified.
                        </Item>
                    </div>
                    <div className='bg-gray-800 shadow-2xl text-white rounded-lg'>
                        <Item title="Do you provide certificates after completing a course?">
                            yes
                        </Item>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQs;