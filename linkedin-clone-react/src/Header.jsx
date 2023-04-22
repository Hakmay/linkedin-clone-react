import React from 'react'
import './Header.css'
import HeaderOption from "./HeaderOption";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';



function Header() {
  return (
    <div className="header">
        <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="" />

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccount} title="My Network"/>
          <HeaderOption Icon={BusinessCenter} title="Jobs"/>
          <HeaderOption Icon={Chat} title="Messaging"/>
          <HeaderOption Icon={Notifications} title="Notifications"/>
          <HeaderOption avatar="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" title="me" />
        </div>

    </div>
  )
}

export default Header