import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import WVECard from './components/WVECard';
import RALPCard from './components/RALPCard';
import BasicsCard from './components/BasicsCard';


// To-do Calculate time at each company
// date formatting
// layout formatting

function App() {
// WVE => Work, Volunteer, Education
// RALP => Ref, Awards, Languages, Publications
  return (
    <div className="container">
      <BasicsCard section="basics"/>
      <WVECard section="work" innerArr="highlights"/>
      <WVECard section="volunteer" innerArr="highlights"/>
      <WVECard section="education" innerArr="courses"/>
      <WVECard section="skills" innerArr="keywords"/>
      <RALPCard section="awards"/>
      <RALPCard section="publications"/>
      <RALPCard section="languages"/>
      <RALPCard section="references"/>
    </div>
  );
}

export default App;
