import React, {useState} from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
                alt="/youtube"
                className="header__logo" 
            />
            </Link>
            
            </div>
            <div className="header__input">
            <input onChange={(e) => setInputSearch(e.target.value)} 
             value={inputSearch}
             type="text" placeholder="Search" />
             <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/> 
             </Link>
            
            </div>

            <div className="header__icons">
            <VideoCallIcon  className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar 
            alt="Kayode Balogun"
            src="https://avatars3.githubusercontent.com/u/61081369?s=460&u=240ee0cc43a3cf39d3566edb748446e7ad8eb481&v=4"/>
            </div>
        </div>
    )
}

export default Header
