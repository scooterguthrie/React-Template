import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;