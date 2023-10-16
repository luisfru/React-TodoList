import React, { useState,useEffect } from 'react'
import './TimeDate.css';
function TimeDate() {
  const [date,setDate] = useState(new Date());
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
    
  useEffect(() => {
      const date = new Date();
      const options = { weekday: 'long' };
      const currentDayOfWeek = date.toLocaleString('en-US', options);
      setCurrentDayOfWeek(currentDayOfWeek);
      const timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  }, []);

  return(
      <div className="Date">
          <p>  Day : {currentDayOfWeek}</p>
          <p> Time : {date.toLocaleTimeString()}</p>
          <p> Date : {date.toLocaleDateString()}</p>

      </div>
  )
}

export default TimeDate;
