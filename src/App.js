import { useEffect, useState } from "react";
import ClockScreen from "./Components/ClockScreen";
import Weather from "./Components/Weather";

function App() {

  const [date, setDate] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDate(new Date()), 10000);
    }, []);

    // let date = new Date()

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const hour = date.getHours()
  const minutes = date.getMinutes()


  const startDate = new Date(date.getFullYear(), 0, 1);

  const days = Math.floor((date - startDate) /
    (24 * 60 * 60 * 1000));
 
  const weekNumber = Math.ceil(days / 7);

  const day = date.getDay()

  const dayofweek = date.getDay()

  const time = `${hour}:${minutes}`

  const dayOfyear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  


  return (
   <main className="flex flex-col w-screen">
      <ClockScreen 
        day={day}
        hour={hour}
        time={time}
        place={timeZone}
      />
      <Weather 
        timezone={timeZone}
        dayOfWeek={dayofweek}
        dayOfYear={dayOfyear(date)}
        Weeks={weekNumber}
      />
   </main>
  );
}

export default App;
