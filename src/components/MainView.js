import React, { TabBarIOS, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectTab } from '../actions/tabBarActions';

let MainView = ({ selected, onPress }) => (
  <TabBarIOS>
    <TabBarIOS.Item
      title='教学课程'
      selected={selected === '教学课程'}
      onPress={() => onPress('教学课程')}>
      <View>
        <Text>This is the courses page</Text>
      </View>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      title='我'
      selected={selected === '我'}
      onPress={() => onPress('我')}>
      <View>
        <Text>This is user page</Text>
      </View>
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
