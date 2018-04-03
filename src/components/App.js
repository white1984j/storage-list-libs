import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../store/store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          App
        </div>
      </Provider>
    );
  }
}

export default App;
