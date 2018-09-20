import React from "react";
import { Container, Jumbotron, Button } from 'reactstrap';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="page">
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Container>
            </Jumbotron>
            <Container fluid >
                <h1 className="mt-4">Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates, earum culpa odio.</p>
                <NavLink to="/about" className="btn btn-primary" activeClassName="active">About</NavLink>
            </Container>
        </div>
    )
}

export default Home;