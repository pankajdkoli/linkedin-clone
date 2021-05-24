import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from './Linkedin-png.png'
import logo1 from './logo-people.jpeg'

import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SuprvisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
    return (
        <div className="header">

            {/* Header*/}
            <div className="header_left">

                <img src={logo} alt="" 
                    
                />
                <div className="header_search">
                    <SearchIcon />
                    {/* Search Icom */}
                    <input type="text" />

                </div>

            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SuprvisorAccount} title='My Newtwork' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={logo1} title='me' />
            </div>


        </div>
    )
}

export default Header;