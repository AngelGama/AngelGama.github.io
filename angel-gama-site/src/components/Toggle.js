import React from 'react';
import sun from '../assets/img/sun.svg';
import moon from '../assets/img/moon.svg';

export const Toggle = () => {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    };

    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme === "light") setLightMode();
    else setDarkMode();

    const toggleTheme = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className="toggle">
            <input
                className="toggle-input"
                type="checkbox"
                id="toggle"
                defaultChecked={selectedTheme === "dark"}
                onChange={toggleTheme}
            />
            <label className="toggle-label" htmlFor="toggle">
                <img src={sun} alt="Light Mode" className="icon sun-icon" />
                <img src={moon} alt="Dark Mode" className="icon moon-icon" />
            </label>
        </div>
    )
}


