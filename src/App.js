import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import SearchContainer from './components/containers/SearchContainer';
import SavesContainer from './components/containers/SavesContainer';
import NewsContainer from './components/containers/NewsContainer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={SearchContainer} />
            <Route path="/news" component={NewsContainer} />
            <Route path="/saves" component={SavesContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
