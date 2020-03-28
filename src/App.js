import React from 'react';
import { data } from './resume.json.js'
import './App.css';
import Card from './components/Card/index'

function App() {
  const { name, label, picture, email, phone, website, summary, location } = data.basics
  return (
    <div className="container">
    {/* two components left and right sides */}
      <Card />
    </div>
  );
}

export default App;
