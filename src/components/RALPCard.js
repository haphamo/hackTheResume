import React, { Fragment } from 'react';
import { data } from '../resume.json';
import { uuid } from 'uuidv4';

export default function RALPCard({ section }) {
  // get references, awards, languages and publications section in data.
  // findData is an array of objects
  let dataSet = data[section]
  // profiles has same structure, an arr of obj, but is nested in basics
  if(section === "profiles") {
    dataSet = data.basics.profiles
  }
  // map through array to get the individual entries of each section
  const allSectionData = dataSet.map(entry => {
    // obj destructuring for all values from RALP sections
    const { title, date, awarder, summary, language, fluency, name, publisher, releaseDate, website, email, phone, network, username, url } = entry

    return(
      <div className={`section ${section}`} key={uuid()}>
        {section === "awards" && 
          <Fragment>
             <div>{title}</div>
             <div>{date}</div>
             <div>{awarder}</div>
             <div>{summary}</div>
          </Fragment>
        }

        {section === "publications" &&
          <Fragment>
            <div>{name}</div>
            <div>{publisher}</div>
            <div>{releaseDate}</div>
            <div>{website}</div>
            <div>{summary}</div>
          </Fragment>
        }

        {section === "languages" && <div>{language}: {fluency}</div>}

        {section === "references" && 
          <Fragment> 
            <div>{email}</div>
            <div>{phone}</div>
          </Fragment>
        }
        {section === "profiles" &&
          <Fragment>
            <div>{network}</div>
            <div>{username}</div>
            <div>{url}</div>
          </Fragment>
        }
      </div>
    )
  })

  return(
    <div className={`${section} container`}>
      <div className="header">{section}</div>
      {allSectionData}
    </div>
  )
}