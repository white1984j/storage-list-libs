import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../../store/store'
import './index.css';

import Form from '../Form/index'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App;
