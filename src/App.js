import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import WorkOrVoluneeterCard from './components/WorkVolunteer/WorkVolunteer'
import Education from './components/Education/Education'


function App() {

  return (
    <div className="container">
    {/* two components left and right sides */}
      <WorkOrVoluneeterCard color="pink" section="work"/>
      <WorkOrVoluneeterCard color="lightblue" section="volunteer"/>
      <Education section="education"/>
    </div>
  );
}

export default App;
