import React from 'react';
import LogoImg from '../assets/season.png';
import { BiSearch} from 'react-icons/bi';
import { useState } from 'react';

export const Navbar = () => {
  // const [query, setQuery] = useState({
  //   location: ""
  // });

  const [query, setQuery] = useState('');

  const handleLocationInputChange = (event) =>{
    setQuery(event.target.value);
  };

  return (
    <div className="navbar_container flex justify-between item-center px-12 py-4">
      <div id="logo_container" className="h-12">
            <img src={LogoImg} alt="logo" className='h-full'/>
      </div>

      <div id="search_bar" className='bg-search-bar-color h-10 rounded-3xl'>
          <form className="w-80 px-3 py-2 flex item-centre">
          <button className="px-1">
            <BiSearch className='text-white'/>
          </button>
          <input
           className="outline-none bg-search-bar-color w-80"
            type="text" 
            placeholder="Search"
            onChange={handleLocationInputChange}/>
          </form>

          

      </div>
      
      <div id="sign_in_container">
      <button type="submit" className='text-white bg-sign-in-button-color px-4 py-1 mr-12 rounded-3xl'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar;