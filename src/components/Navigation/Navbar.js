import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
    
    state = {
        menuOpen: false
    };
    
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
        this.setState({ menuOpen: false });
    }

    render() {
        return (
            <Menu 
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}>
                <img
                    id="logo" 
                    href="/" 
                    src="../mja_logo.png" 
                    alt="MJ Allayanz Logo" 
                    width="115"
                    height="85"
                    />
                <Link 
                    onClick={() => this.closeMenu()} 
                    className="menu-item" 
                    to="/"> 
                    Home 
                </Link>
                <Link 
                    onClick={() => this.closeMenu()} 
                    className="menu-item" 
                    to="/about"> 
                    About 
                </Link>
                <Link 
                    onClick={() => this.closeMenu()} 
                    className="menu-item" 
                    to="/services"> 
                    Services 
                </Link>
                <Link 
                    onClick={() => this.closeMenu()} 
                    className="menu-item" 
                    to="/contact"> 
                    Contact Us 
                </Link>
            </Menu>
        );
    }
  };

  export default Navbar;