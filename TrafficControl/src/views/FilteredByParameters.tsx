import React, { ChangeEvent, useState } from 'react';
import '../styles/filteredbyparameters.scss'
import { FilterRequest } from '../api/models/FilterRequest';
import { FilteredData } from '../api/FilterByParametersApi';
import { FilterBy } from '../api/FilterByParametersApi';
import { FilteredTable } from '../components/FilteredTable';

export const FilteredByParameters = () => {
    
    const [ifFilterBySpeed, setIfFilterBySpeed] = useState(false);
    const [ifFilterByFromDate, setIfFilterByFromDate] = useState(false);
    const [ifFilterByToDate, setIfFilterByToDate] = useState(false);
    const [filterSpeed, setFilterSpeed] = useState(0);
    const [filterFromDate, setFilterFromDate] = useState('');
    const [filterToDate, setFilterToDate] = useState('');
    const [filteredData, setFilteredData] = useState<FilteredData[]>([]);
    
    const handleIfFilterBySpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIfFilterBySpeed(!ifFilterBySpeed);
      };

    const handleIfFilterByFromDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIfFilterByFromDate(!ifFilterByFromDate);
      };

    const handleIfFilterByToDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIfFilterByToDate(!ifFilterByToDate);
      };

    const handleFromDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterFromDate(event.target.value);
      };

    const handleSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterSpeed(parseFloat(event.target.value));
      };

      const handleToDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterToDate(event.target.value);
      };

      const handleFiltrationInitiation = async () => {
        var request = new FilterRequest(ifFilterBySpeed, 
          ifFilterByToDate, 
          ifFilterByFromDate, 
          filterSpeed, 
          filterToDate, 
          filterFromDate);

        var returnedData = await FilterBy.fetchFilteredData(request);
        setFilteredData(returnedData);
      }
    
      return (
        <div>
            <label><input type = "checkbox" onChange={handleIfFilterByFromDateChange}></input> Filter by From Date?</label>
            <label><input type = "checkbox" onChange={handleIfFilterByToDateChange}></input> Filter by To Date?</label>
            <label><input type = "checkbox" onChange={handleIfFilterBySpeedChange}></input> Filter by Speed?</label>
            <button className = "filterbutton" onClick = {handleFiltrationInitiation}>Get Data</button>
        
        <div className = "dateentries">
            {ifFilterByFromDate ? (<input type="date" onChange={handleFromDateChange}/>) : (<div></div>)}
            {ifFilterByToDate ? (<input type="date" onChange={handleToDateChange}/>) : (<div></div>)}
            {ifFilterBySpeed ? (<input type="number" min={0} onChange={handleSpeedChange}/>) : (<div></div>)}
        </div>
        <div><FilteredTable data = {filteredData}></FilteredTable></div>
        </div>
    )
}