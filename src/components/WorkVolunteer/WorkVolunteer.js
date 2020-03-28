import React from "react";
import { data } from '../../resume.json.js';
import { uuid } from 'uuidv4'


export default function WorkOrVoluneeterCard({ section, color }) {
  const findData = data[section]
  const styles = {
    outerContainer: {
      backgroundColor: `${color}`,
      fontFamily: "Roboto, sans-serif",
      margin: '1em'
    },
    innerContainer: {
      margin: '1em'
    }
  }

  // map through array of work/volunteer to get all work/volunteer history
  const allWork = findData.map(work => {

    const labels = Object.keys(work)
    const [ company, organization, position, website, summary, highlights] = labels
    // in each work element, get all highlights
    const allHighlights = work.highlights.map(highlight => {
      return(
        <div key={uuid()} className="single-highlight"> • {highlight}</div>
      )
    })

    // below return one work/volunteer element
    return(
      <div className={`all-${section}`} style={styles.innerContainer} key={uuid()}>
        <div className={position}>{work.position}</div>
        {/* conditional logic for company/org */}
        {work.organization && <div className={`${organization}`}>{work.organization}</div>}
        {work.company && <div className={`${company}`}>{work.company}</div>}
        <div className="timeline">{work.startDate} - {work.endDate}</div>
        <div className={`${website}`}>{work.website}</div>
        <div className={`${summary}`}>{work.summary}</div>
        {allHighlights}
      </div>
    )
  })
    
    return(
    <div className={`${section}-container`} style={styles.outerContainer}>
      <div className="header" style={{textTransform: "uppercase"}}>{section} Experience</div>
        {allWork}
    </div>
  )
}