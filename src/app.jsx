import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './styles/app.css';


import Header from './layouts/header';
import Main from './layouts/main';
import About from './layouts/about';
import Faqs from './layouts/faqs';
import SubmitASign from './components/submit-a-sign';

import SearchBar from './components/search-bar';
import Footer from './components/footer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SearchBar />
          <div className="body container">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
              <Route exact path="/faqs" component={Faqs} />
              <Route exact path="/submit-a-sign" component={SubmitASign} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
