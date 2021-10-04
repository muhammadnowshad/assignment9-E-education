import React, { useState, useEffect } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import './Courses.css'

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('./coursesData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div className='container'>
            <div className='course-area text-center py-5 bg-info my-5 border'>
                <h1>Online Courses<br/> For Anyone, Anywhere</h1>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            <div className="d-flex row my-5 g-4">
               
                {
                    courses.map(course => <CourseInfo course={course}></CourseInfo>)
                }
            
            </div>
        </div>
    );
};

export default Courses;