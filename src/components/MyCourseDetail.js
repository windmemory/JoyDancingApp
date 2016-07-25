import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MyVideoRow from './MyVideoRow';

let MyCourseDetailPage = React.createClass({
  getInitialState() {
    return {
      playingIndex: 0,
      paused: true,
    }
  },
  render() {
    const { videos } = this.props.course;

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
          {videos.map((video, index) => (
            <MyVideoRow video={video} key={index}/>
          ))}
        </ScrollView>
      </View>
    )
  }
})

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    height,
    width,
  },
  container: {
    paddingTop: 64,
  },
})



export default MyCourseDetailPage;
