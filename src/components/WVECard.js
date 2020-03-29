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
    const { company, organization, position, website, startDate, endDate, summary, institution, area, studyType, gpa } = entry
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
            <div className='institution'>{institution}</div>
            <div className='area'>{area}</div>
            <div className='studyType'>{studyType}</div>
            <div className='gpa'>{gpa}</div>
          </Fragment>
        }
        <div className='position'>{position}</div>
        {/* it's org key in volunteer or company in work*/}
        {section === "volunteer" && <div className="organization">{organization}</div>}
        {section === "work" && <div className="company">{company}</div>}
        <div className="timeline">{startDate} - {endDate}</div>
        {(section === "work" || section === "volunteer") && 
          <Fragment>
            <div className="website"><a href={website}>{website}</a></div>
            <div className="summary">Summary: {summary}</div>
          </Fragment>
        }
        <div className={`all ${innerArr}`}>{nestedData}</div>
      </div>
    )
  })
  
    return(
    <div className={`${section} container`}>
      <div className="header">{section} Experience</div>
        {allSectionData}
    </div>
  )
}