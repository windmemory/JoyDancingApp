import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CourseList from './CourseList';
import { updateCourses } from '../actions/publicCourseActions';

let CoursePage = React.createClass ({
  componentWillMount() {
    console.log('Course page will mount');
    this.props.updateCourses();
  },
  render() {
    return (
      <CourseList />
    )
  }
})

const mapDispatchToProps = (dispatch) => ({
  updateCourses: () => dispatch(updateCourses()),
})

CoursePage = connect(null, mapDispatchToProps)(CoursePage);

export default CoursePage;
