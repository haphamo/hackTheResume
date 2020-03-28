import React from 'react';
import { data } from '../resume.json.js';
import { uuid } from 'uuidv4';

export default function Education({ section }) {
  const educationData = data[section]

  // get all education
  const allEducation = educationData.map(education => {
    
    // get all courses
    const allCourses = education.courses.map(course => {
      return(
        <div key={uuid()} className="course">
          {course}
        </div>
      )
    })
    return(
      <div className="section" key={uuid()}>
        <div>{education.institution}</div>
        <div>{education.area}</div>
        <div>{education.studyType}</div>
        <div>{education.startDate} | {education.endDate}</div>
        <div>GPA: {education.gpa}</div>
        <div className="courses">Courses: {allCourses}</div>
      </div>
    )
  })

  return(
    <div className={`${section}-container`}>
      <div className="header">{section}</div>
      {allEducation}
    </div>
  )
}