import React from "react";
import { data } from '../../resume.json.js';
import { uuid } from 'uuidv4'

const keys = Object.keys(data)
const [ basics, work, volunteer , education, awards, publications, skills, languages, interests, references ] = keys

export default function Card() {
  
  const allWork = data.work.map(work => {
    const allHighlights = work.highlights.map(highlight => {
      return(
        <div classname="all-highlights" key={uuid()}>
          <div className="single-highlight"> • {highlight}</div>
        </div>
      )
    })
    
    return(
      <div className="all-work" key={uuid()}>
        <div className="position">{work.position}</div>
        <div className="company-timeline">{work.company} | {work.startDate} - {work.endDate}</div>
        <div className="website">{work.website}</div>
        <div className="summary">{work.summary}</div>
        {allHighlights}
      </div>
    )
  })
    
    return(
    <div className="card-container">
      <div className="category-title" style={{textTransform: "uppercase"}}>{work}</div>
        {allWork}
    </div>
  )
}