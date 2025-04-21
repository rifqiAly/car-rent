import React from 'react'
import './NavBarAndContent.css'
import Content from './Content/Content'
import SideBar from './NavBar/SideBar/SideBar'
const NavBarAndContent = () => {
  return (
    <div className='navbar-and-list'>
      <SideBar/>
      <Content />
    </div>
  )
}

export default NavBarAndContent