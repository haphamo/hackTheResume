import React from 'react';
import { data } from '../resume.json.js';
import { uuid } from 'uuidv4'


export default function WorkOrVoluneeterCard({ section, color }) {
  const findData = data[section]


  // map through array of work/volunteer to get all work/volunteer history
  const allWork = findData.map(work => {

    // in each work element, get all highlights
    const allHighlights = work.highlights.map(highlight => {
      return(
        <div key={uuid()} className="highlight"> • {highlight}</div>
      )
    })

    // below return one work/volunteer element
    return(
      <div className="section" key={uuid()}>
        <div className='position'>{work.position}</div>
        {/* conditional logic for company/org */}
        {work.organization && <div className='organization'>{work.organization}</div>}
        {work.company && <div className='company'>{work.company}</div>}
        <div className="timeline">{work.startDate} - {work.endDate}</div>
        <div className="website"><a href={work.website}>{work.website}</a></div>
        <div className="summary">Summary: {work.summary}</div>
        <div className="highlights">{allHighlights}</div>
        
      </div>
    )
  })
    
    return(
    <div className={`${section}-container`}>
      <div className="header">{section} Experience</div>
        {allWork}
    </div>
  )
}