import React from 'react';
import { data } from '../resume.json.js';
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
      {!(section === "basics" || section === "profiles") && <div className="header">{section}</div>}
      <div className="section">
        {picture && <img id="user-img" alt="avatar" src={picture}></img>}
        <div className="name">{name}</div>
        <div className="label">{label}</div>
        <div className="summary">{summary}</div>
        <div className="email">{email}</div>
        <div className="website">{website}</div>
        <div className="address">{address}</div>
        <div className="postalCode">{postalCode}</div>
        <div className="city">{city}</div>
        <div className="countryCode">{countryCode}</div>
        <div className="region">{region}</div>
      </div>
      <RALPCard section="profiles"/>

  
    </div>
  )
}