import React from "react";
import { data } from '../../resume.json.js';
import { uuid } from 'uuidv4'


export default function WorkOrVoluneeterCard({ section, color }) {
  console.log('section',section)
  const findData = data[section]
  const styles = {
    container: {
      backgroundColor: `${color}`,
      fontFamily: "'Roboto', sans-serif",
      margin: "1em"
    }
  }

  // map through array of work to get all work history
  const allWork = findData.map(work => {
    // in each work element, get all highlights
    const allHighlights = work.highlights.map(highlight => {
      return(
        <div className="all-highlights" key={uuid()}>
          <div className="single-highlight"> • {highlight}</div>
        </div>
      )
    })
    // below return one work/volunteer element
    return(
      <div className="all-work" key={uuid()}>
        <div className="position">{work.position}</div>
        {/* conditional for company/org */}
        
        <div className="org">{work.organization}</div>
        <div className="company">{work.company}</div>

        <div className="timeline">{work.startDate} - {work.endDate}</div>
        <div className="website">{work.website}</div>
        <div className="summary">{work.summary}</div>
        {allHighlights}
      </div>
    )
  })
    
    return(
    <div className="card-container" style={styles.container}>
      <div className="category-title" style={{textTransform: "uppercase"}}>{section}</div>
        {allWork}
    </div>
  )
}