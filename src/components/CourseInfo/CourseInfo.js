import React from 'react';
import { useHistory } from 'react-router';
import './CourseInfo.css'

const CourseInfo = (props) => {

    const history = useHistory([]);
    const {t_name, t_img, c_img, title, c_name, student, lesson, price} = props.course || {};
    const handleAdmissinBtn = () =>{
        history.push('./admission')
    }
    
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card my-card h-100">
                <div>
                    <img src={c_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body bg-light">
                    <div className='d-flex justify-content-between'>
                        <h4>{c_name}</h4>
                        <h5 className='text-danger'>${price}</h5>
                    </div>
                    <h4 className='text-primary'>{title.slice(0,40)}...</h4>
                    <div className='d-flex my-4 align-items-center'>
                        <img src={t_img} className='teacher-img rounded-circle img-fluid' alt="" />
                        <p className='ms-3'>{t_name}</p>
                    </div>
                    <div className='d-flex fw-bold align-items-center justify-content-between'>
                        <p className=''><i className="fas fa-book"></i> {lesson} Lesson </p>
                        <p className=''><i className="fas fa-user"></i> {student} Students</p>
                    </div>
                    <button onClick={handleAdmissinBtn} className='btn btn-primary w-100 py-2'>Admission</button>
                </div> 
            </div>
        </div>
    );
};

export default CourseInfo;