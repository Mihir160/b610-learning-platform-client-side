import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8">
                    <div className="space-y-8">
                        {/* question answer */}
                        <div className='bg-gray-800 p-4 rounded-lg text-white shadow-2xl'>
                            <p className="mb-4 text-xl font-medium">
                                what is cors?
                            </p>
                            <p className="">
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any
                                origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                                CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin
                                resource, in order to check that the server will permit the actual request. In that preflight,
                                the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                            </p>
                        </div>
                        <div className='bg-gray-800 p-4 rounded-lg text-white shadow-2xl'>
                            <p className="mb-4 text-xl font-medium">
                                Why are you using firebase? What other options do you have to implement authentication?
                            </p>
                            <p className="">
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI
                                libraries to authenticate users to your app. It supports authentication using passwords, phone numbers,
                                popular federated identity providers like Google, Facebook and Twitter, and more.
                            </p>
                        </div>
                        <div className='bg-gray-800 p-4 rounded-lg text-white shadow-2xl'>
                            <p className="mb-4 text-xl font-medium">
                                How does the private route work?
                            </p>
                            <p className="">
                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                                If the user is not authenticated he will be redirected to the login page and the user can only access
                                the authenticated routes If he is authenticated (Logged in).
                            </p>
                        </div>
                        <div className='bg-gray-800 p-4 rounded-lg text-white shadow-2xl'>
                            <p className="mb-4 text-xl font-medium">
                                What is Node? How does Node work?
                            </p>
                            <p className="">
                                Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or
                                resources on waiting for I/O requests to return.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;