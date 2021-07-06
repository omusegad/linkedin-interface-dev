import React from 'react';
import CourseList from './CourseList';

function RightSidebar(props) {
    return (
        <div className="col-lg-3 p-3 bg-white border rounded">
          <div className="row">
            <div className="col-lg-8 course-box">
                <h6>Today’s top courses</h6>
                <ul>
                    <CourseList/>
                    <CourseList/> 
                    <CourseList/>
                </ul>
            </div>
            <div className="col-lg-4 text-right">
                <h6>i</h6>
            </div>
          </div>
        </div>
    );
}

export default RightSidebar;