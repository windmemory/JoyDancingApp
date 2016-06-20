import React, { Component, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import CoursePage from './components/CoursePage';
import UserPage from './components/UserPage';
import TabItem from './components/TabItem';
import CourseDetailPage from './components/CourseDetailPage';

import createStore from './createStore'

const store = createStore()
const RouterWithRedux = connect()(Router);

const JoyDancingApp = () => {
  return (
    <Provider store={store}>
      <RouterWithRedux>
        <Scene key="root" tabs={true}>
          <Scene key="courseWrapper" title="教学课程" icon={TabItem}>
            <Scene key="coursePage" component={CoursePage} title="教学课程" />
            <Scene key="courseDetail" component={CourseDetailPage} />
          </Scene>
          <Scene key="userPage" component={UserPage} title="我" icon={TabItem}/>
        </Scene>
      </RouterWithRedux>
    </Provider>
  )
}

export default JoyDancingApp
