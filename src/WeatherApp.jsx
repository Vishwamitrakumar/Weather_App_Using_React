import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function weatherApp(){
     const [weatherInfo , setWeatherInfo] = useState({
          city : "Delhi",
          feelslike :   36.59,
          humidity:58,
          temp:32.05,
         tempMax:32.05,
         tempMin:   32.05,
         weather:"haze",
     });

     let updateInfo = (newInfo) => {
          setWeatherInfo(newInfo);
     };

     return (
          <div style={{textAlign:"center"}}>
               <h2>Weather App by </h2>
               <SearchBox   updateInfo={ updateInfo}/>
               <InfoBox Info={weatherInfo} />
          </div>
     )
}