import React, { Component } from "react";
import { Container } from 'reactstrap';

export class Footer extends Component {
    render() {
        return (
            <div className="content-wrapper fixed-footer bg-light">
                <Container fluid>
                    © 2018 React Template
                </Container>
            </div>
        );
    }
}