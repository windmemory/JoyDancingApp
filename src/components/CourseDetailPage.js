import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

let CourseDetailPage = React.createClass({
  getInitialState() {
    return {
      playingIndex: 0,
      paused: true,
    }
  },
  render() {
    const { videos, name, dancer, description } = this.props.course;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => this.setState({paused: !this.state.paused})}>
          <Video source={{uri: videos[this.state.playingIndex].lowLink}}
                 style={styles.videoPlayer}
                 paused={this.state.paused}
                 />
        </TouchableOpacity>
        <ScrollView style={styles.videosThumbnail}
                    contentContainerStyle={styles.videosThumbnailContainer}
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
    )
  }
})

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingBottom: 50,
  },
  videosThumbnail: {
    backgroundColor: '#CCCCCC',
  },
  videosThumbnailContainer: {
    height: 88,
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
  }
})

export default CourseDetailPage;
