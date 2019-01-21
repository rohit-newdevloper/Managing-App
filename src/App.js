import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCX7ILuOPvMx_w67jhgUpr8iV1E7WEpVjc',
      authDomain: 'manager-7975c.firebaseapp.com',
      databaseURL: 'https://manager-7975c.firebaseio.com',
      projectId: 'manager-7975c',
      storageBucket: 'manager-7975c.appspot.com',
      messagingSenderId: '346981280490',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
