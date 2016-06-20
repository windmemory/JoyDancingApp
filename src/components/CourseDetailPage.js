import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Video from 'react-native-video';

let CourseDetailPage = React.createClass({
  render() {
    const { videos } = this.props.course;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Video source={{uri: videos.full.front.highLink}}
               style={styles.videoPlayer}
               />
        <ScrollView horizon={true}></ScrollView>
        <Text>This is course detail page</Text>
      </ScrollView>
    )
  }
})

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingBottom: 50,
  },
  videoPlayer: {
    width: width,
    height: width / 16 * 9,
  }
})

export default CourseDetailPage;
