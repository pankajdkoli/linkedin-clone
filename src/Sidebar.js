import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import background from './background.jpeg'

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar_top">
                <img src={background} alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>pankaj koli</h2>
                <h4>pankaj@gmail.com</h4>

            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                <p>who viewed you</p>
                <p className="sidebar_statNumber">2543</p>

                </div>
                <div className="sidebar_stat"> 
                <p>views on post</p>
                <p className="sidebar_statNumber">2543</p>
                </div>
            </div>
                <div className="sidebar_bottom">
                    <p>Recent</p>
                </div>
        </div>
    )
}

export default Sidebar;

