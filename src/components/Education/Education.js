import React from 'react';
import { data } from '../../resume.json.js';

export default function Education({ section }) {
  const educationData = data[section]
  

  return(
    <div className={`${section}-container`}>
      <div className="header">{section}</div>
      
    </div>
  )
}