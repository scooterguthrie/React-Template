import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header></Header>
        <section>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="slide"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;