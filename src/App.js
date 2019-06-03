import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './Results';  

class App extends Component {

  render () {
    return (
      <div className="App">
       <h1>President & Assholes</h1>
       <Results />
      </div>
    );
  }
}

export default App;
