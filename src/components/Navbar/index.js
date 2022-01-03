import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                MyUmeme
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/equipments" activestyle='true'>
                    Equipments
                </NavLink>
                <NavLink to="/electricalBills" activestyle='true'>
                    Billing
                </NavLink>
                <NavLink to="/meterReadings" activestyle='true'>
                    Meter Readings
                </NavLink>
                <NavLink to="/signin" activestyle='true'>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;