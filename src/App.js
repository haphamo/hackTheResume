import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import WVECard from './components/WVECard';
import RALPCard from './components/RALPCard';
import Basics from './components/Basics';


// To-do Calculate time at each company
// date formatting
// layout formatting

function App() {
// WVE => Work, Volunteer, Education
// RALP => Ref, Awards, Languages, Publications
  return (
    <div className="container">
      <Basics />
      <WVECard section="work" innerArr="highlights"/>
      <WVECard section="volunteer" innerArr="highlights"/>
      <WVECard section="education" innerArr="courses"/>
      <RALPCard section="awards"/>
      <RALPCard section="publications"/>
      <RALPCard section="languages"/>
      <RALPCard section="references"/>
    </div>
  );
}

export default App;
