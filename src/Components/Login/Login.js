import { GoogleAuthProvider ,GithubAuthProvider} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Login = () => {

    const [error, setError] = useState('')
    const { signIn} = useContext(AuthContext)
   
    const navigate = useNavigate()

    const location = useLocation()

    const googlProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const from = location.state?.from?.pathname || '/';
    

     const {providerLogin} = useContext(AuthContext)
      //google login system
      const handleGoogleSignIn = () =>{
          providerLogin(googlProvider)
          .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
          })
          .catch(error => console.error(error))
      }
     //github login system
     const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
          })
          .catch(error => console.error(error))
     }

    //user login sumbit email and password 
    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
 
        const password = form.password.value;
       
        signIn(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                navigate(from, {replace: true})
                setError('') 
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
        
    }
    return (
        <div className="overflow-hidden bg-gray-900">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            This courses will  <br className="hidden md:block" />
                            give an idea about {' '}
                            <span className="text-teal-accent-400">cse <span className='text-orange-600'>programming</span></span>
                        </h2>
                        <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                            Computer programming is the process of performing a particular computation usually by designing and building an executable computer program.
                        </p>

                    </div>
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                        <div className="relative">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="766323e1-e594-4ffd-a688-e7275079d540"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Login
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="please enter your email"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            password
                                        </label>
                                        <input
                                            placeholder="please enter your password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                            name="password"
                                        />
                                    </div>

                                    <label className="label">
                                        <Link to="/register" className=" link link-hover">You have no account please Register</Link>
                                    </label>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex bg-gray-600 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <p className="text-xs text-red-600 sm:text-sm">
                                        {error}
                                    </p>
                                </form>
                                <div className="mt-4 mb-2 sm:mb-4 flex justify-evenly">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="submit"
                                        className=" btn btn-outline gap-4 "
                                    >
                                        <FaGoogle></FaGoogle>   Google
                                    </button>
                                    <button
                                        onClick={handleGithubSignIn}
                                        type="submit"
                                        className="btn btn-outline gap-4 "
                                    > 
                                        <FaGithub></FaGithub>   Github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;