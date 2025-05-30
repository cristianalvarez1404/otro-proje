import React from 'react'
import './topBar.css'
import UserButton from '../userButton/UserButton'
import Image from '../image/Image'

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* SEARCH */}
      <div className='search'>
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder='Search'/>
      </div>
      {/* USER */}
      <UserButton/>
    </div>
  )
}

export default TopBar