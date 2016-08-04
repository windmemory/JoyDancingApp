import React, { Component } from 'react';
import { Dimensions, StyleSheet, StatusBar, View } from 'react-native';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';

let VideoPlayer = React.createClass({
  getInitialState() {
    return {
      rate: 1,
      volume: 1,
      paused: false,
      currentTime: 0.0,
      duration: 0.0,
      hideControl: false,
    }
  },
  render() {
    const { video } = this.props;
    const onLoad = (data) => {
      this.setState({duration: data.duration});
    };
    const onProgress = (data) => {
      this.setState({currentTime: data.currentTime});
    };
    const getCurrentTimePercentage = () => {
      if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
      } else {
        return 0;
      }
    }
    const flexCompleted = getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - getCurrentTimePercentage()) * 100;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.wrapper}>
          <Video
            source={{uri:video.localFilePath}}
            style={styles.videoPlayer}
            resizeMode="cover"
            onLoad={onLoad}
            onProgress={onProgress}
            rate={this.state.rate}
            volume={this.state.volune}
            paused={this.state.paused}
          />
          <View style={styles.control}>
            <View>
              <View style={styles.progress}>
                <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
                <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
              </View>
            </View>
          </View>
        </View>
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
  control: {
    backgroundColor: "transparent",
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  wrapper: {
    width: height,
    height: width,
    transform: [{rotate: '90deg'}],
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
})

export default VideoPlayer;
