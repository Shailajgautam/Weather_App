import React from 'react'

// Assets
import sunImg from '../assets/sun.png';
import sunriseSunsetImg from '../assets/sunrise.png';
import pressurelogo from '../assets/pressure.png'
import visibilitylogo from '../assets/visibility.png'
import airqualitylogo from '../assets/air quality.png'
import windspeedlogo from '../assets/wind.png'




export const HomePage = (searchChange) => {
      const sunriseSunsetStyle = "h-12";
      const infoContainerImgStyle = "image-container w-16 mx-2 flex item-centre justify-around mx-auto"

 

  return (

    
    <div className='home_container bg-main-bg-color flex '>
      <div className='current_temp_container bg-search-bar-color w-3/5 mx-auto rounded-3xl text-white py-6'>
            <div className="temp_details flex h-60 justify-around items-center ">
                  <div className="left_temp_details">
                        {/* <h2 className="temp text-9xl">20</h2> */}
                        <h2 className="temp text-9xl">{searchChange}</h2>
                        <h3 className="weather_description text-4xl">Clear</h3>
                  </div>

                  <div className="right_temp_details">
                        <img src={sunImg} alt="weather description" className='h-48' />
                  </div>
            </div>
            <div className="sunrise_sunset_details flex justify-around">
                  <div className='sunrise_details'>
                        <img src={sunriseSunsetImg} alt="sunrise" className={sunriseSunsetStyle} />
                        <p>6:30 am</p>
                  </div>

                  <div className="date_details">
                        <p>16th February</p>
                  </div>

                  <div className='sunset_details'>
                        <img src={sunriseSunsetImg} alt="sunset" className={sunriseSunsetStyle} />
                        <p>6:30 pm</p>
                  </div>
            </div>
      </div>
      
      <div className='info-container bg-search-bar-color w-1/5 mx-auto flex item-left px-6  py-8 rounded-3xl flex-wrap justify-between'>

       <div className='pressure-container py-2 px-4 '>
            <div className={infoContainerImgStyle}>
              <img src={pressurelogo} alt="pressurelogo" />    
            </div>
            <div className="text-container text-white bold p-1">
                  <p>Pressure</p>
            </div>
            <div className="text-container text-white p-1 flex text-centre ">
                  <p> 3 hpa </p>
            </div>
       </div>

       <div className='visibility-container'>
            <div className={infoContainerImgStyle}>
                  <img src={visibilitylogo} alt="visibiitylogo" />
            </div>
            <div className="text-container text-white">
                  Visibility
            </div>
            <div className="text-container text-white">
                  3 km
            </div>
       </div>

       <div className="airquality-container">
            <div className={infoContainerImgStyle}>
                  <img src={airqualitylogo} alt="air quality logo" />
            </div>
            <div className="text-container text-white">
                  <p>Air Quality</p>
            </div>
            <div className="text-container text-white">
                  <p> 70 </p>
            </div>
       </div>

       <div className="windspeed-container">
            <div className={infoContainerImgStyle}>
                  <img src={windspeedlogo} alt="windspeedlogo" />
            </div>
            <div className="text-container">
                  <p>Wind Speed</p>
            </div>
            <div className="text-container">
                  <p> 3km/h </p>
            </div>
       </div>
      </div>
    </div>
    
  )
}

export default HomePage;