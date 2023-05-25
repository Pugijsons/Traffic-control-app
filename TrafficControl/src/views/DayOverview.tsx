import React, { ChangeEvent, useState } from 'react';
import { DayOverviewApi, DayOverviewData } from '../api/DayOverviewApi';
import LineChart from '../components/LineChart';

export const DayOverview: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<DayOverviewData[]>([]);
  const [date, setDate] = useState('');

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const fetchData = async (date: string) => {
    if(date === ''){
      return;
    }
    try {
      const data = await DayOverviewApi.fetchDayOverview(date);
      setFetchedData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = () => {
    fetchData(date);
  };

  return (
    <div>
      <input type="date" onChange={handleDateChange} value={date} />
      <button onClick={handleClick}>Fetch Data</button>
      <LineChart data={fetchedData} />
    </div>
  );
};

export default DayOverview;