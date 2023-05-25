import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { DayOverview } from './views/DayOverview';
import { FilteredByParameters } from './views/FilteredByParameters';
import { DatabaseOptions } from './views/DatabaseOptions';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/dayoverview" element = {<DayOverview/>}/>
      <Route path ="/filteredbyparameters" element = {<FilteredByParameters/>}/>
      <Route path ="/dboptions" element = {<DatabaseOptions/>}/>
      </Routes>
    </div>
  );
}

export default App;
