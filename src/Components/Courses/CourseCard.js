import React from 'react';
import { Link} from 'react-router-dom';

const CourseCard = ({ course }) => {
   
    
    const { title, image_url, description } = course
    return (
        <div className="m-8 ">
            <div className="flex flex-col  h-1/2 w-full overflow-hidden bg-white border rounded shadow-2xl lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={image_url}
                        alt=""
                        className="object-cover w-full lg:absolute  lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col lg:m-0 m-4 w-48">
                    <div className='flex justify-around'>
                        <h5 className="mb-3 font-bold">
                            {title}
                           
                        </h5>
                       


                    </div>
                    <p className="mb-5 text-gray-800">
                        <span className="">{description.length > 250 ?
                            <>{description.slice(0, 70) + '....'}</>
                            : description
                        }
                        </span>
                    </p>
                 
                </div>
                <div className='mb-2 flex justify-end flex-col'>
                       <Link to={`/course/${course.courseName_id}`}> <button
                            type="submit"
                            className=' bg-gray-900 text-white rounded-lg '
                        >
                            See Details
                        </button></Link>
                 </div>
            </div>
        </div>
    );
};

export default CourseCard;