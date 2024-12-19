import {useState} from 'react';

import SearchBox from './SearchBox';
import InfoBox from './InfoBox';


export default function WeatherApp() {

    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:12.2,
        humidity:67,
        temp:13.09,
        tempMax:13.09,
        tempMin:13.09,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Raj</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
       
    )
}