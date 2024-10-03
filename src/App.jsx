import { useState } from 'react';
import './App.css'
import useFetch from './useFetch'

function App() {

  const [cityName,setCityName] = useState("")
  const [name,setName] = useState("")  

  const allWeather = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
  //console.log(allWeather);

  const getweatherData=()=>{
    setName(cityName);
    if(cityName == ""){
      alert("Please Enter City Name!!!!");
    }
  }

  return (
    <>
      <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{width:'600px'}} className='bg-light rounded p-5'>
          <div className='d-flex justify-content-center'>
            <img width={'250px'} src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
          </div>
          <h1>Weather App</h1>
          <div className='d-flex justify-content-between'>
            <input onChange={(e)=>setCityName(e.target.value)} style={{width:'90%'}} type="text" placeholder='Search' className='border rounded' name="" id="" />
            <button onClick={getweatherData} className='btn btn-dark rounded'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div>
            <h3 style={{fontWeight:'400'}}>Location: <small className='text-warning'>{allWeather.name}</small></h3>
            <h3 style={{fontWeight:'400'}}>Temperature: <small className='text-warning'>{allWeather.weather ? allWeather.main.temp : ""}%</small></h3>
            <h3 style={{fontWeight:'400'}}>Weather Condition: <small className='text-warning'>{allWeather.weather ? allWeather.weather[0].description : ""}</small></h3>
            <h3 style={{fontWeight:'400'}}>Feel Like: <small className='text-warning'>{allWeather.weather ? allWeather.main.feels_like : ""}°</small></h3>
            <h3 style={{fontWeight:'400'}}>Humidity: <small className='text-warning'>{allWeather.weather ? allWeather.main.humidity : ""}%</small></h3>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
