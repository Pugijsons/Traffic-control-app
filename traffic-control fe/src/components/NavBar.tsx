import Reach from 'react';
import { Link, NavLink }  from "react-router-dom"
import "../styles/components/nav-bar.scss"
import { NAV_LINKS } from '../constants/nav-links';
import { Button } from './button';

export const NavBar = () => {
    return (
        <nav className = 'nav-bar'>
            <ul>
               {NAV_LINKS.map((link) => (
                <li key = {link.path}>
                <NavLink to= {link.path}><Button>{link.title}</Button></NavLink>
                </li>
               ))}
            </ul>
        </nav>
    )
}