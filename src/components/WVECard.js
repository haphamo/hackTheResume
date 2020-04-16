import React, { Fragment } from 'react';
import { data } from '../resume.json.js';
import { uuid } from 'uuidv4'

// This component handles work, volunteer and education because of their similar data structure
export default function WVECard({ section, innerArr }) {
  // get work/volunteer/education section in data.
  // dataSet is an array of objects

  const dataSet = data[section]

  // map through array to get the individual entries of each section
  const allSectionData = dataSet.map(entry => {

    // obj destructuring for keys in the work, volunteer and education category
    const { company, organization, position, website, startDate, endDate, summary, institution, area, studyType, gpa, name, level } = entry
    // Below gets the entry that contains an array
    // work & volunteer have highlights which is an arr, education has courses
    const nestedData = (entry[innerArr]).map(innerArrElements => {
      return(
        <div key={uuid()} className={innerArr}> • {innerArrElements}</div>
      )
    })
    
    // below return one work/volunteer/education element
    return(
      <div className="section" key={uuid()}>
        {section === "education" && 
          <Fragment>
            <div className="top-line">
              <div className='institution'>{institution}</div>
              <div className="timeline">{startDate} - {endDate}</div>
            </div>
            <div className='area'>{area}</div>
            <div className='studyType'>{studyType}</div>
            <div className='gpa'>{gpa}</div>
          </Fragment>
        }
       
        {section === "volunteer" && 
        <div className="top-line">
          <div className="organization">{organization}</div>
          <div className="timeline">{startDate} - {endDate}</div>
        </div>}
        {section === "work" && 
          <div className="top-line">
            <div className="company">{company}</div>
            <div className="timeline">{startDate} - {endDate}</div>
          </div>}
        
        {(section === "work" || section === "volunteer") && 
          <Fragment>
            <div className='position'>{position}</div>
            <div className="website"><a href={website}>{website}</a></div>
            <div className="summary">Summary: {summary}</div>
          </Fragment>
        }
        {
          section === "skills" &&
          <Fragment>
            <div>{name}</div>
            <div>{level}</div>
          </Fragment>
        }
        <div className={`all ${innerArr}`}>{nestedData}</div>
      </div>
    )
  })
  
    return(
    <div className={`${section} container`}>
      {/* Work and volunteer sections have EXPERIENCE SUFFIX */}
      <div className="header">{section} {(section === "work" || section === "volunteer") && ("Experience")}</div>
        {allSectionData}
    </div>
  )
}