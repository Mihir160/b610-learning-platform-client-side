import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dark, setDark] = useState(false)
    // dark mode function
    const handledarkMood = event => {
        setDark(event.target.checked)

    }
    // logout function
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div class="bg-gray-900">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">

                    <Link
                        to=""

                        class="inline-flex items-center"
                    >   <img className='h-12 h-8 rounded-lg' src='https://cdn.dribbble.com/users/62253/screenshots/2359883/media/f40cc1f4910fa9262145b810a36a1bc1.jpg?compress=1&resize=400x300' />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            <span className='text-orange-600'>CODE</span> STACK
                        </span>
                    </Link>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link to="/courses" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faqs"

                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"

                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            {/* dark and light text show mode */}
                            <div className='flex'>
                                <input onClick={handledarkMood} type="checkbox" className="toggle" />
                                {
                                    !dark ? <p className='text-white mx-1'>light</p> : <p className='text-white mx-1'>Dark</p>
                                }
                            </div>

                        </li>
                    </ul>
                    <ul class="flex hidden items-center  space-x-8 lg:flex">
                        <li>

                            {/* user photo and name tooltip */}
                            {
                                user?.uid ?
                                    <>
                                        <div className='flex items-center'>
                                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                <img className='h-7 mx-4 tooltip   rounded-lg' src={user?.photoURL} />
                                            </div>

                                            <button className='p-1 rounded-lg text-white bg-gray-600' onClick={handleLogOut}>Log Out</button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Link
                                            to="/login"
                                            class="inline-flex  items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Login
                                        </Link>

                                    </>
                            }

                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0  w-full">
                                <div class="p-5  bg-gray-900 border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"

                                                class="inline-flex items-center"
                                            >

                                                <span class="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                                                    <span className='text-orange-600'>CODE</span> STACK
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <Link
                                                    to="/courses"

                                                    class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/faqs"

                                                    class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"

                                                    class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>

                                            <li>

                                                {/* user photo and name tooltip */}
                                                {
                                                    user?.uid ?
                                                        <>
                                                            <div className='flex items-center'>
                                                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                                    <img className='h-7 mx-4 tooltip   rounded-lg' src={user?.photoURL} />
                                                                </div>

                                                                <button className='p-1 rounded-lg text-white bg-gray-600' onClick={handleLogOut}>Log Out</button>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <Link
                                                                to="/login"
                                                                class="inline-flex  items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign up"
                                                                title="Sign up"
                                                            >
                                                                Login
                                                            </Link>

                                                        </>
                                                }

                                            </li>
                                            <li>
                                                {/* dark and light text show mode */}
                                                <div className='flex'>
                                                    <input onClick={handledarkMood} type="checkbox" className="toggle" />
                                                    {
                                                        !dark ? <p className='text-white mx-1'>light</p> : <p className='text-white mx-1'>Dark</p>
                                                    }
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;