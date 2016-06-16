import React from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import CourseRow from './CourseRow';

let CourseList = React.createClass ({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.courses),
    };
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <CourseRow />}
      />
    )
  }
})

const mapStateToProps = (state) => ({
  courses: state.publicCourse,
});


CourseList = connect(mapStateToProps)(CourseList);

export default CourseList;
