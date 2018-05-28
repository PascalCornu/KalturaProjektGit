import React, { Component } from 'react';

class MenuBar extends Component {
    
    render() {
        return (
            <div className="menu-bar">
                <img src="./logo.png" className="logo" alt="SWISS TXT Logo" />
                <p className="smallHeading">SWISS TXT DEMO</p>
            </div>
        );
    }
}

export default MenuBar;