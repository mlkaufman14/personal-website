import React from "react";

import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./Navbar.styles";

const Navbar = () => {
    return (
        <>
           <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/signin" activeStyle>
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