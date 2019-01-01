import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import SearchContainer from './containers/SearchContainer';
import SavesContainer from './containers/SavesContainer';
import ArticlesContainer from './containers/ArticlesContainer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/search" component={SearchContainer} />
            <Route path="/news" component={ArticlesContainer} />
            <Route path="/saves" component={SavesContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
