import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course-name')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-2'>
            <div className='m-8'>
                <h1 className='text-5xl font-bold'>Courses</h1>
                {
                    courses.map(course => <p key={course._id} className="link text-3xl p-4">
                        <Link to={`/course/${course.courseName_id}`}>{course.course_name}</Link>
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