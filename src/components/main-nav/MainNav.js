import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from "react-router-dom";

export class MainNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar className="content-wrapper fixed-top" color="light" light expand="sm">
                <NavbarBrand href="/">React Template</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}