import React from "react";
import './Sidebar.css'
import logo from '../assets/images/mdi_donation.png'
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';
import {
    RiLogoutBoxLine,
    RiAccountCircleLine,
    RiNotification2Line
} from 'react-icons/ri'

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/",
            name: "Dashboard"
        },
        {
            path: "/hospitals",
            name: "Hospitals"
        },
        {
            path: "/campaign",
            name: "Campaign"
        },
        {
            path: "/report",
            name: "Report"
        },
        {
            path: "/archive",
            name: "Archive"
        },
        {
            path: "/setting",
            name: "Setting"
        },
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <img src={logo} alt="website logo" />
                    <h1 className="title">Lene</h1>
                </div>
                <>
                    {
                        menuItem.map((item, index) => {
                            console.log("Yes");
                            return (
                            <NavLink to={item.path} key={index} className="link"
                                activeclassName="active">
                                <div className="link_name">{item.name}</div>
                            </NavLink>)
})
                    }
                </>


            </div>
            {/* <div className="topNav">
                <RiLogoutBoxLine />
                <RiNotification2Line />
                <RiAccountCircleLine />
            </div> */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Sidebar;