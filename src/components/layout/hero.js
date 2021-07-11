import React from 'react';
import STLogo from '../../images/strangerthings-logo.png';
import NetflixBackgroundImage from '../../images/netflix-background.jpg'

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="content">
                <img className="logo" src={STLogo} />
                <h2>Season 4 Coming Soon!</h2>
                <p>
                    The Hawkins Gang will return!
                </p>
                <div className="button-wrapper">
                    <a href="#" className="button-el">Watch now</a>
                    <a href="#" className="button-el">My list</a>
                </div>
            </div>
            <div className="overlay" style={{ background: `url(${NetflixBackgroundImage})` }} />
        </div>
    )
}

export default Hero