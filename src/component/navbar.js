import React from "react";
import { NavLink } from 'react-router-dom';
import planet from './planet/planet 2.png';

const NavBar = () => (
    <header>
        <nav className="nav-container">
        <div className="logo-container">
            <img src={planet} alt="Logo" className="planet-logo" />
            <h1>space Traveller&apos;s Hub</h1>
        </div>
        <ul className="nav-items">
            <li className="li">
            <NavLink to="/" className={`${({ isActive }) => (isActive ? 'active' : '')} navlink`}>Rocket&apos;s</NavLink>
            </li>
            <li className="li">
            <NavLink to="/Mission" className={`${({ isActive }) => (isActive ? 'active' : '')} navlink`}>Mission&apos;s</NavLink>
            </li>
            <li className="li">
            <NavLink to="/MyProfile" className={`${({ isActive }) => (isActive ? 'active' : '')} navlink`}>My Profile</NavLink>
            </li>
        </ul>
        </nav>
    </header>
);

export default NavBar;