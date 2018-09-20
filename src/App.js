import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import Home from './components/home/Home';
import { VehicleLookup } from "./vehicle-lookup/VehicleLookup";
import { UsedValues } from "./used-values/UsedValues";

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header></Header>
        <section>
          <Container fluid >
            <h2 className="mt-4 mb-3">Used Values</h2>
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="slide"
                >
                  <Switch location={location}>
                    <Route exact={true} path="/" component={VehicleLookup} />
                    <Route path="/vehicle-lookup" component={VehicleLookup} />
                    <Route path="/used-values" component={UsedValues} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </Container>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;