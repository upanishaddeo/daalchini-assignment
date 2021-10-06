import React, { Component } from 'react';
import '../styles/header.css'
import heroLogo from '../images/heroLogo.png'

export class Header extends Component {
    render() {
        return (
            <div className="navbarContainer">
                <div className="hero-logo"><img src={heroLogo} at="daalchini logo" /></div>
                <div className="nav-elements-wrap">
                    <div className="active"><a href="#">Home</a></div>
                    <div><a href="#">Products</a></div>
                    <div><a href="#">Explore</a></div>
                    <div><a href="#">Store</a></div>
                </div>
                <div className="button-div">
                    <button className="buttonLogin">Login or sign up</button>
                </div>
            </div>
        )
    }
}

export default Header
