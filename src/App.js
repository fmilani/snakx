import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import snakxApp from './reducers';
import HeaderContainer from './HeaderContainer';
import GameContainer from './GameContainer.js';
import './App.css';

let store = createStore(snakxApp);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HeaderContainer />
          <GameContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
