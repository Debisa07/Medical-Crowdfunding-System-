import React, { useState } from 'react';
import logo from '../assets/images/legash logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { RxExit } from 'react-icons/rx';
import { BsBell } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';

function Navbar(children) {
    const [signed, setSigned] = useState(true);
    return (
        <>
                <div className="navbar">
                    <Link to="/" className="menu-title">
                        <img src={logo} alt="The Logo" style={{width:"125px", height:"125px",marginTop:'25px',padding:'0', color:"white"}}/>
                        <span>Legash</span>
                    </Link>

                    <div className="rightnav">
                        <div className={signed? 'signed': ''}>
                            <RxExit />
                            <BsBell />
                            <MdOutlineAccountCircle />
                        </div>
                    </div>
                    
                </div>
                <nav className={'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className='nav-text'>
                                    <NavLink to={item.path} activeClassName='active'>
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
        </>
    )
}

export default Navbar
