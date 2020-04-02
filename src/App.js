import React from 'react';
import './App.css';
import WVECard from './components/WVECard';
import RALPCard from './components/RALPCard';
import BasicsCard from './components/BasicsCard';


// To-do Calculate time at each company
// date formatting
// layout formatting

function App() {
// WVE => Work, Volunteer, Education
// RALP => Ref, Awards, Languages, Publications, Profiles(from Basics)
  return (
    <div className="container" style={{display: 'flex'}}>
      <div className="left-side" style={{backgroundColor: 'lightyellow', flex: 1}}>
        <BasicsCard section="basics"/> 
        <WVECard section="skills" innerArr="keywords"/>
        <RALPCard section="languages"/>
        <RALPCard section="references"/>
      </div>
      <div className="right-side" style={{backgroundColor: 'lightsteelblue', flex: 2}}>
        <WVECard section="work" innerArr="highlights"/>
        <WVECard section="volunteer" innerArr="highlights"/>
        <WVECard section="education" innerArr="courses"/>
        <RALPCard section="awards"/>
        <RALPCard section="publications"/>
      </div>
    </div>
  );
}

export default App;
