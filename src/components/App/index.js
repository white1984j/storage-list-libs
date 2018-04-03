import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../../store/store';
import './index.css';

import Form from '../Form/index';
import List from '../List/index';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
