import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import MainView from '../src/components/MainView';

import createStore from './createStore'

const store = createStore()

const JoyDancingApp = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  )
}

export default JoyDancingApp
