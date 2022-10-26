import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
const courses = useLoaderData()
console.log(courses)


    return (
        <div className='grid lg:grid-cols-2'>
            <div className='m-8 lg:p-8 lg:h-2/4 lg:rounded-lg lg:shadow-lg w-1/2 lg:bg-gray-800'>
                <h1 className='text-5xl font-bold lg:text-white'>Courses</h1>
                {
                    courses.map(course => <p key={course._id} className="link lg:text-white text-xl p-4">

                        <Link to={`/course/${course.courseName_id}`}>{course.title}</Link>

                    </p>)
                }
            </div>
          
            <div className=''>
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;