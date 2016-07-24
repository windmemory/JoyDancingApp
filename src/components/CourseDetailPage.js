import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Video from 'react-native-video';
import { addCourseToLearn } from '../actions/learningCoursesActions';

let CourseDetailPage = React.createClass({
  getInitialState() {
    return {
      playingIndex: 0,
      paused: true,
    }
  },
  render() {
    const { videos, name, dancer, description } = this.props.course;
    const { addCourse } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => this.setState({paused: !this.state.paused})}>
            <Video source={{uri: videos[this.state.playingIndex].lowLink}}
                   style={styles.videoPlayer}
                   paused={this.state.paused}
                   />
          </TouchableOpacity>
          <ScrollView style={styles.videosThumbnail}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      >
            {videos.map((video, index) => (
              <TouchableOpacity key={index} onPress={() => this.setState({playingIndex: index, paused: false})}>
                <View style={styles.videoSmallBox}>
                  <Text>{video.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View>
            <Text>{name}</Text>
            <Text>教学老师: {dancer}</Text>
            <Text>{description}</Text>
          </View>
        </ScrollView>
        <View style={styles.addCourseButton}>
          <TouchableOpacity onPress={() => addCourse(this.props.course)}>
            <Text style={styles.addCourseText}>我要学起来</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
})

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    height,
    width
  },
  container: {
    paddingTop: 64,
    height: height - 50,
  },
  videosThumbnail: {
    backgroundColor: '#CCCCCC',
    height: 88,
    flex: 0,
  },
  videoPlayer: {
    width: width,
    height: width / 16 * 9,
  },
  videoSmallBox: {
    width: 128,
    height: 72,
    backgroundColor: '#DDCC22',
    margin: 8,
  },
  addCourseButton: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCourseText: {
    color: 'white'
  },
})

const mapDispatchToProps = (dispatch) => ({
  addCourse: (course) => dispatch(addCourseToLearn(course)),
});

CourseDetailPage = connect(null, mapDispatchToProps)(CourseDetailPage);

export default CourseDetailPage;
