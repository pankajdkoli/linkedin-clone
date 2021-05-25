import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import background from './background.jpeg'

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem"> 
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
        </div>
    );

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
                    {recentItem('Ract')}
                    {recentItem('node')}
                    {recentItem('java')}
                    {recentItem('developer')}
                </div>
        </div>
    )
}

export default Sidebar;

