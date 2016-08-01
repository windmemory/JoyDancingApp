import React, { Component } from 'react';
import { Dimensions, StyleSheet, StatusBar, View } from 'react-native';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';

let VideoPlayer = React.createClass({

  render() {
    const { video } = this.props;
    return (
      <View style={styles.background}>
        <StatusBar hidden={true}/>
        <Video
          source={{uri:video.localFilePath}}
          style={styles.videoPlayer}
          resizeMode="cover"
        />
      </View>
    )
  }
});

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default VideoPlayer;
