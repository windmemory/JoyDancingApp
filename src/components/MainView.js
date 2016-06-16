import React, { TabBarIOS, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectTab } from '../actions/tabBarActions';
import CoursePage from './CoursePage';
import UserPage from './UserPage';

let MainView = ({ selected, onPress }) => (
  <TabBarIOS>
    <TabBarIOS.Item
      title='教学课程'
      selected={selected === '教学课程'}
      onPress={() => onPress('教学课程')}>
      <CoursePage />
    </TabBarIOS.Item>
    <TabBarIOS.Item
      title='我'
      selected={selected === '我'}
      onPress={() => onPress('我')}>
      <UserPage />
    </TabBarIOS.Item>
  </TabBarIOS>
)

const mapStateToProps = (state) => {
  return {
    selected: state.tabBar.selected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (tab) => {
      dispatch(selectTab(tab));
    }
  }
}

MainView = connect(mapStateToProps, mapDispatchToProps)(MainView);

export default MainView;
