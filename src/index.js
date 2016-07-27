import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import CoursePage from './components/CoursePage';
import MyCoursePage from './components/MyCoursePage';
import UserPage from './components/UserPage';
import TabItem from './components/TabItem';
import CourseDetailPage from './components/CourseDetailPage';
import MyCourseDetail from './components/MyCourseDetail';

import createStore from './createStore'

const store = createStore()
const RouterWithRedux = connect()(Router);

const JoyDancingApp = () => {
  return (
    <Provider store={store}>
      <RouterWithRedux>
        <Scene key="root" tabs={true}>
          <Scene key="myCoursePage" component={MyCoursePage} title="我的课程" icon={TabItem}/>
          <Scene key="coursePage" component={CoursePage} title="教学课程" icon={TabItem} />
          <Scene key="userPage" component={UserPage} title="我" icon={TabItem} />
        </Scene>
        <Scene key="courseDetail" component={CourseDetailPage} />
        <Scene key="myCourseDetail" component={MyCourseDetail} />
      </RouterWithRedux>
    </Provider>
  )
}

export default JoyDancingApp
