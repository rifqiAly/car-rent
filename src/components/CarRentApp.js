import React from 'react'
import './CarRentApp.css'
import NavBarAndContent from './NavBarAndContent/NavBarAndContent'
import SearchBar from './SearchBar/SearchBar'
const ContactListApp = () => {
    return (
        <div className='contact-list-app'>
            <SearchBar />
            <NavBarAndContent />
        </div>
    )
}

export default ContactListApp