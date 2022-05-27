import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const active = ({isActive}) => ({color: isActive ? 'gold' : ''});
const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/" style={active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" style={active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" style={active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" style={active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" style={active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;