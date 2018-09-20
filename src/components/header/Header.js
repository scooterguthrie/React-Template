import React, { Component } from "react";

import { MainNav } from '../main-nav/MainNav';

export class Header extends Component {
    render() {
        return (
            <header>
                <MainNav></MainNav>
            </header>
        );
    }
}