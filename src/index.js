import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app'

import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCV7BtoXm9-O2FO4A7OuF5gtBQyE898Vus",
    authDomain: "datamatch-bootcamp-ff6a1.firebaseapp.com",
    databaseURL: "https://datamatch-bootcamp-ff6a1-default-rtdb.firebaseio.com",
    projectId: "datamatch-bootcamp-ff6a1",
    storageBucket: "datamatch-bootcamp-ff6a1.appspot.com",
    messagingSenderId: "843011662258",
    appId: "1:843011662258:web:951f0f5463b06e26ad04ab"
  };

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
    // firestore: firestoreReducer // <- needed if using firestore
  })
  
  // Create store with reducers
  const initialState = {}
  const store = createStore(rootReducer, initialState)

  // react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true 
    // Get custom claims along with the profile
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
  }
  

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root'),
);