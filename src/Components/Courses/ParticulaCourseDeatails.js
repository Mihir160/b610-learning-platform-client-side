import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DetailCourse from './DetailCourse';
import { FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ParticulaCourseDeatails = () => {
    const detail = useLoaderData()
    const ref = React.createRef();
    const courseDetails = detail.details
  
    const { title, image_url, description, courseName_id } = detail;
    return (
        <div className="m-8 grid lg:grid-cols-1 justify-items-center">
            <div className="lg:w-1/2">

                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title lg:text-4xl">{title}</h2>
                        {/* pdf download */}
                        <label>
                            <Pdf  targetRef={ref} filename="Code-stack.pdf">
                                {({ toPdf }) => <button onClick={toPdf}><FaFilePdf className='h-12 w-12'></FaFilePdf></button>}
                            </Pdf>
                        </label>
                    </div>
                    <figure><img src={image_url} alt="car!" /></figure>
                    {/* course details and pdf download start  */}
                    <div ref={ref}>
                        <p>{description}</p>
                        <h2 className='text-3xl font-bold'>Course Details</h2>
                        <div>
                            {
                                courseDetails.map(detail => <DetailCourse key={detail.id} detail={detail}></DetailCourse>)
                            }
                        </div>
                    </div>
                    {/* get premium access dynamic link */}
                    <Link to={`/checkout/${courseName_id}`}> <button className='bg-gray-800 text-white p-2 rounded-lg'>
                        Get premium access
                    </button></Link>

                </div>
            </div>
        </div>
    );
};

export default ParticulaCourseDeatails;