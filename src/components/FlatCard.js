import React from 'react';
import { data } from '../resume.json';
import { uuid } from 'uuidv4';

export default function FlatCard({ section }) {

  const dataSet = data[section] // array of obj
  
  const allSectionData = dataSet.map(entry => {
    const { title, date, awarder, summary, language, fluency, name, publisher, releaseDate, website } = entry

    return(
      <div className={`section ${section}`} key={uuid()}>
        <div>{title}</div>
        {language && <div>{language}: {fluency}</div>}
      
        <div>{date}</div>
        <div>{awarder}</div>
        <div>{name}</div>
        <div>{publisher}</div>
        <div>{releaseDate}</div>
        <div>{website}</div>
        <div>{summary}</div>
      </div>
    )
  })

  return(
    <div className={`${section}-container`}>
      <div className="header">{section}</div>
      {allSectionData}
    </div>
  )
}