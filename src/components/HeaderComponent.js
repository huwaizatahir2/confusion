import React from "react";
import { useState } from 'react'
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from "react-router-dom";

function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }

    return (
       <React.Fragment>
            <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href='/'>
                        <img src="assets/images/logo.png" height="30" width="41"
                        alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg">
                                        Home
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg">
                                        About us
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg">
                                        Menu
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg">
                                        Contact Us
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>
                                Ristorante Con Fusion
                            </h1>
                            <p>
                                we take inspiration from the World's best cuisines, and create a unique fusion experience.
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
       </React.Fragment>
      );

}

export default Header;