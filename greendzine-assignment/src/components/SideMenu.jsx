import React from 'react';
import '../styles/SideMenu.css';

const SideMenu = () => {
    return(
        <div className="parent-container-side-menu">
                
                <a href="" className="active-tab-home">
                            <img src='/assets/home-icon.svg' alt="home" />
                </a>

                <a href="" className="active-tab-settings">
                            <img src='/assets/gear-icon.svg' alt="settings" />
                </a>
        </div>
    );
};

export default SideMenu;