import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  // configuring early returns
  if(!isMenuOpen) return null;

  return (
    
    <div className='p-5 shadow-lg w-48'>
       <h2 className='font-bold'>Subscriptions</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>

            <li>Movies</li>
            <li>Live</li>
            </ul>
        <h2 className='font-bold'>Subscriptions</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>

            <li>Movies</li>
            <li>Gaming</li>

        </ul>
        <h2 className='font-bold pt-5'>Watch later</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>

            <li>Movies</li>
            <li>Gaming</li>

        </ul>
    </div>
  )
}

export default Sidebar