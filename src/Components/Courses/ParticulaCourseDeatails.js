import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailCourse from './DetailCourse';
import { FaFilePdf } from 'react-icons/fa';
const ParticulaCourseDeatails = () => {
    const detail = useLoaderData()
    console.log(detail)
    const courseDetails = detail.details
    console.log(courseDetails)
    const { title, image_url, description } = detail;
    return (
        <div className="m-8 grid lg:grid-cols-1 justify-items-center">
            <div className="lg:w-1/2">

                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title lg:text-4xl">{title}</h2>
                        <label>
                            <FaFilePdf className='h-12 w-12'></FaFilePdf>
                        </label>
                    </div>
                    <figure><img src={image_url} alt="car!" /></figure>
                    <p>{description}</p>
                    <h2 className='text-3xl font-bold'>Course Details</h2>
                    <div>
                        {
                            courseDetails.map(detail => <DetailCourse key={detail.id} detail={detail}></DetailCourse>)
                        }
                    </div>
                    <button className='bg-gray-800 text-white p-2 rounded-lg'>
                           Get premium access
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ParticulaCourseDeatails;