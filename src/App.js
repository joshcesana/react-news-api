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
          <Route exact path="/" component={SearchContainer} />
          <Route exact path="/news" component={NewsContainer} />
          <Route exact path="/saves" component={SavesContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
