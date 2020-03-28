import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import WorkOrVoluneeterCard from './components/WorkVolunteer'
import Education from './components/Education'
import FlatCard from './components/FlatCard'

// To-do Calculate time at each company
// date formatting

function App() {

  return (
    <div className="container">
    {/* two components left and right sides */}
      <WorkOrVoluneeterCard section="work"/>
      <WorkOrVoluneeterCard section="volunteer"/>
      <Education section="education"/>
      <FlatCard section="awards"/>
      <FlatCard section="publications"/>
      <FlatCard section="languages"/>
      <FlatCard section="references"/>
    </div>
  );
}

export default App;
