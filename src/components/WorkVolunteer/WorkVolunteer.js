import React from 'react';
import { data } from '../../resume.json.js';
import { uuid } from 'uuidv4'


export default function WorkOrVoluneeterCard({ section, color }) {
  const findData = data[section]
  const styles = {
    outerContainer: {
      backgroundColor: `${color}`,
      margin: '1em'
    },
    innerContainer: {
      margin: '1em'
    }
  }

  // map through array of work/volunteer to get all work/volunteer history
  const allWork = findData.map(work => {

    // in each work element, get all highlights
    const allHighlights = work.highlights.map(highlight => {
      return(
        <div key={uuid()} className="single-highlight"> • {highlight}</div>
      )
    })

    // below return one work/volunteer element
    return(
      <div className={`${section}`} style={styles.innerContainer} key={uuid()}>
        <div className='position'>{work.position}</div>
        {/* conditional logic for company/org */}
        {work.organization && <div className='organization'>{work.organization}</div>}
        {work.company && <div className='company'>{work.company}</div>}
        <div className="timeline">{work.startDate} - {work.endDate}</div>
        <div className="website">{work.website}</div>
        <div className="summary">{work.summary}</div>
        {allHighlights}
      </div>
    )
  })
    
    return(
    <div className={`${section}-container`} style={styles.outerContainer}>
      <div className="header">{section} Experience</div>
        {allWork}
    </div>
  )
}