import React from 'react';
import { data } from '../resume.json';
import { uuid } from 'uuidv4';

export default function RALPCard({ section }) {
  // get references, awards, languages and publications section in data.
  // findData is an array of objects

  const dataSet = data[section]
  // map through array to get the individual entries of each section
  const allSectionData = dataSet.map(entry => {
    // obj destructuring for all values from RALP sections
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