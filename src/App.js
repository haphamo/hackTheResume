import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import WorkOrVoluneeterCard from './components/WorkVolunteer'
import Education from './components/Education'

// To-do Calculate time at each company
// date formatting

function App() {

  return (
    <div className="container">
    {/* two components left and right sides */}
      <WorkOrVoluneeterCard section="work"/>
      <WorkOrVoluneeterCard section="volunteer"/>
      <Education section="education"/>
    </div>
  );
}

export default App;
