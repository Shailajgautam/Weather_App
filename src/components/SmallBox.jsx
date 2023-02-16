import React from 'react'
import Cloudy from '../assets/cloudy.png'

export const SmallBox = () => {
  return (

    <div className = "bg-search-bar-color item-centre justify-around px-2 py-6 w-52 rounded-3xl">
    <div className='SmallBox_container bg-search-bar-color px-4 py-4 rounded-3xl' >
      <div className='text-left text-white'>
         <p className='text-2xl'>6.30 am</p>
      </div>

      <div className='sunrise_details w-24 flex item-centre justify-around mx-auto'>

            <img src={Cloudy} alt="sunrise" className=" px-2 py-2"/>
            
      </div>
      <div className="text-center px-4 py-2 text-white text-2xl">
        <p> 5 C </p>
      </div>

    </div>
    </div>
  )
  
}

export default SmallBox