// // import React, { useState } from 'react'
// // import './WeatherApp.css'

// // import search_icon from '../Assets/search.png';
// // import clear_icon from "../Assets/cleaning.png";
// // import cloud_icon from "../Assets/cloudy.png";
// // import drizzle_icon from "../Assets/rainy.png";
// // import snow_icon from "../Assets/sun.png";
// // import humidity_icon from "../Assets/humidity.png";
// // import wind_icon from "..//Assets/windy.png";
// // import rain_icon from "../Assets/hot.png";


// // const WeatherApp = () => {
         
// //    let api_key ="34b7e49444e896488456cd92c8b71c6f";

// //    const [wicon, setWicon] = useState(cloud_icon);
   
  
// //     const search = async () => {
// //          const element = document.getElementsByClassName("cityInput")
// //           if(element[0].value==="")
// //           {
// //             return 0;
// //           }
// //          let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
         
// //          let response = await fetch(url);
// //          let data = await response.json();

// //          const humidity = document.getElementById("humidity-percent");
// //          const wind = document.getElementsByClassName("wind-rate");
// //          const temprature = document.getElementsByClassName("weather-temp");
// //          const location = document.getElementsByClassName("weather-location");
   
   
// //         humidity[0].innerHTML = data.main.humidity+ " % ";
// //         wind[0].innerHTML = data.wind.speed+ " km/h ";
// //         temprature[0].innerHTML = data.main.temprature+ " c";
// //         location[0].innerHTML = data.name.location;

// //         if(data.weather[0].icon==="04d" || data.weather[0].icon==="01n" ){
// //              setWicon(clear_icon )
// //         }
// //         }

// //   return (
// //     <div className='container'>
// //     <div className='top-bar'>
// //       <input type='text' className='cityInput' placeholder='Search'  />
// //         <div className='search_icon' onClick={ ()=> {search()}}>
// //         <img src={search_icon} alt="" />
// //         </div>
// //     </div>    
// //      <div className='weather-image'>
// //      <img src={wicon} alt=""  />
// //      </div>
// //      <div className='weather-temp'> 24 c </div>
// //      <div className='weather-location'> London </div>
     
// //      <div className=' date-container'>
// //      <div className='element'>
// //      <img src= {humidity_icon}  alt=" " className='icon' />
// //      <div className='data'>
// //         <div className="humidity-percent">64%</div>
// //         <div className='text'> Humidity </div>
// //          </div>
// //      </div>

// //      <div className='element'>
// //      <img src={ wind_icon } alt=" " className='icon' />
// //      <div className='data'>
// //         <div className="wind-rate">15 km/h</div>
// //         <div className='text'> Wind Speed </div>
// //          </div>
// //      </div>
      
// //      </div>      
          
// //     </div>
// //   )
// // }

// // export default WeatherApp


// import React, { useState, useRef } from 'react';
// import './WeatherApp.css';

// import search_icon from '../Assets/search.png';
// import clear_icon from "../Assets/cleaning.png";
// import cloud_icon from "../Assets/cloudy.png";
// import drizzle_icon from "../Assets/rainy.png";
// import snow_icon from "../Assets/sun.png";
// import humidity_icon from "../Assets/humidity.png";
// import wind_icon from "../Assets/windy.png";
// import rain_icon from "../Assets/hot.png";

// const WeatherApp = () => {
//   const api_key = "34b7e49444e896488456cd92c8b71c6f";
//   const [wicon, setWicon] = useState(cloud_icon);
//   const [weatherData, setWeatherData] = useState({
//     humidity: "--",
//     wind: "--",
//     temperature: "--",
//     location: "--"
//   });
  
//   const cityRef = useRef();

//   const search = async () => {
//     const city = cityRef.current.value.trim();
//     if (!city) return;

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.cod !== 200) {
//       alert("City not found!");
//       return;
//     }

//     setWeatherData({
//       humidity: data.main.humidity,
//       wind: data.wind.speed,
//       temperature: data.main.temp,
//       location: data.name
//     });

//     // Change icon
//     const icon = data.weather[0].icon;
//     if (icon === "04d" || icon === "01n") setWicon(clear_icon);
//     else if (icon === "02d") setWicon(cloud_icon);
//     else if (icon === "09d" || icon === "10d") setWicon(rain_icon);
//     else if (icon === "13d") setWicon(snow_icon);
//     else setWicon(drizzle_icon);
//   };

//   return (
//     <div className='container'>
//       <div className='top-bar'>
//         <input type='text' className='cityInput' placeholder='Search city...' ref={cityRef} />
//         <div className='search_icon' onClick={search}>
//           <img src={search_icon} alt="search" />
//         </div>
//       </div>    

//       <div className='weather-image'>
//         <img src={wicon} alt="weather icon" />
//       </div>

//       <div className='weather-temp'>{weatherData.temperature}°C</div>
//       <div className='weather-location'>{weatherData.location}</div>

//       <div className='date-container'>
//         <div className='element'>
//           <img src={humidity_icon} alt="humidity" className='icon' />
//           <div className='data'>
//             <div className='humidity-percent'>{weatherData.humidity}%</div>
//             <div className='text'>Humidity</div>
//           </div>
//         </div>

//         <div className='element'>
//           <img src={wind_icon} alt="wind" className='icon' />
//           <div className='data'>
//             <div className='wind-rate'>{weatherData.wind} km/h</div>
//             <div className='text'>Wind Speed</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;


import React, { useState, useRef } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from "../Assets/cleaning.png";
import cloud_icon from "../Assets/cloudy.png";
import drizzle_icon from "../Assets/rainy.png";
import snow_icon from "../Assets/sun.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/windy.png";
import rain_icon from "../Assets/hot.png";

const WeatherApp = () => {
  const api_key = "34b7e49444e896488456cd92c8b71c6f";
  const [wicon, setWicon] = useState(cloud_icon);
  const [weatherData, setWeatherData] = useState({
    humidity: "--",
    wind: "--",
    temperature: "--",
    location: "--"
  });
  
  const cityRef = useRef();

  const search = async () => {
    const city = cityRef.current.value.trim();
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    setWeatherData({
      humidity: data.main.humidity,
      wind: data.wind.speed,
      temperature: data.main.temp,
      location: data.name
    });

    // Change icon
    const icon = data.weather[0].icon;
    if (icon === "04d" || icon === "01n") setWicon(clear_icon);
    else if (icon === "02d") setWicon(cloud_icon);
    else if (icon === "09d" || icon === "10d") setWicon(rain_icon);
    else if (icon === "13d") setWicon(snow_icon);
    else setWicon(drizzle_icon);
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search city...' ref={cityRef} />
        <div className='search_icon' onClick={search}>
          <img src={search_icon} alt="search" />
        </div>
      </div>    

      <div className='weather-image'>
        <img src={wicon} alt="weather icon" />
      </div>

      <div className='weather-temp'>{weatherData.temperature}°C</div>
      <div className='weather-location'>{weatherData.location}</div>

      <div className='date-container'>
        <div className='element'>
          <img src={humidity_icon} alt="humidity" className='icon' />
          <div className='data'>
            <div className='humidity-percent'>{weatherData.humidity}%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>

        <div className='element'>
          <img src={wind_icon} alt="wind" className='icon' />
          <div className='data'>
            <div className='wind-rate'>{weatherData.wind} km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
