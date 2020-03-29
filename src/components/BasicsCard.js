import React from 'react';
import { data } from '../resume.json.js';
import { uuid } from 'uuidv4';
import RALPCard from './RALPCard';

export default function Basics({ section }) {
  // nested keys: location (obj), profiles: arr of obj
  const dataSet = data[section]
  const { name, label, picture, email, website, summary } = dataSet
  
  // get the location object
  const locationDetails = dataSet.location
  const { address, postalCode, city, countryCode, region } = locationDetails
  // console.log('here:', data[section].profiles)

  return(
    <div className={`${section} container`}>
      <div className="header">{section}</div>
      <div className="section">
        <div>{name}</div>
        <div>{label}</div>
        <div>{summary}</div>
        <div>{email}</div>
        <div>{website}</div>
        <div>{address}</div>
        <div>{postalCode}</div>
        <div>{city}</div>
        <div>{countryCode}</div>
        <div>{region}</div>
      </div>
      <RALPCard section="profiles"/>

  
    </div>
  )
}