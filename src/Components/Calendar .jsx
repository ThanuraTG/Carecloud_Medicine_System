import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/Calender.css';

const MyRangeCalendar = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  return (
    <div>
      <h3>Select a Date Range</h3>
      <Calendar
        onChange={setDateRange}
        value={dateRange}
        selectRange={true} // Enable range selection
      />
      <p>
        Start Date: {dateRange[0].toDateString()} <br />
        End Date: {dateRange[1].toDateString()}
      </p>
    </div>
  );
};

export default MyRangeCalendar;
