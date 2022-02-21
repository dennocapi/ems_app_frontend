import React from "react";
import { userStore } from '../../store/stores';

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
    const user = userStore(state => state.user);
    return (
        <>
            <Nav>
            {user &&
                <NavLogo to="/">
                    MyUmeme
                </NavLogo>}
                {user &&
                <Bars />}

                <NavMenu>
                    {user &&
                        <NavLink to="/equipments" activestyle='true'>
                            Equipments
                        </NavLink>
                    }

                    {user && <NavLink to="/electricalBills" activestyle='true'>
                        Billing
                    </NavLink>}
                    {user && <NavLink to="/meterReadings" activestyle='true'>
                        Meter Readings
                    </NavLink>}
                    {!user && <NavLink to="/signin" activestyle='true'>
                        Sign In
                    </NavLink>}
                    {user && <NavLink to="/logout" activestyle='true'>
                        Logout
                    </NavLink>}
                    {!user && <NavBtn>
                        <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                    </NavBtn>}
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;