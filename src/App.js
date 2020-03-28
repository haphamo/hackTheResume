import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import WorkOrVoluneeterCard from './components/WorkVolunteer/index'



function App() {
  const { basics, work, volunteer, education, awards, publications, skills, languages, interests, references } = data
  return (
    <div className="container">
    {/* two components left and right sides */}
      <WorkOrVoluneeterCard color="pink" section="work"/>
      <WorkOrVoluneeterCard color="grey" section="volunteer"/>
 
    </div>
  );
}

export default App;
