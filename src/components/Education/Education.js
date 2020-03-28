import React from 'react';
import { data } from '../../resume.json.js';
import { uuid } from 'uuidv4'

export default function Education({ section }) {
  const educationData = data[section]
  const allEducation = educationData.map(education => {
    
    return(
      <div className={`${section}`} key={uuid()}>
        <div>{education.institution}</div>
        <div>{education.area}</div>
        <div>{education.studyType}</div>
        <div>{education.startDate} | {education.endDate}</div>
        <div></div>
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