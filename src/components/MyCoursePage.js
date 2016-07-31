import React from 'react';
import { ListView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MyCourseRow from './MyCourseRow';

let MyCoursePage = React.createClass ({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.courses),
    };
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.courses !== this.props.courses) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.courses),
      })
    }
  },
  render() {
    return (
      <ListView
        enableEmptySections={true}
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <MyCourseRow courseId={rowData.objectId}/>}
      />
    )
  }
})

const styles = StyleSheet.create({
  list: {
    paddingTop: 64,
    paddingBottom: 50,
  }
})

const mapStateToProps = (state) => ({
  courses: state.learningCourses,
});

MyCoursePage = connect(mapStateToProps)(MyCoursePage);

export default MyCoursePage;
