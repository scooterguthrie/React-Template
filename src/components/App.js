import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';

import { Header } from './header/Header';

import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
      <Header></Header>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;