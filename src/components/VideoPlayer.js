import React, { Component } from 'react';
import { Dimensions, StyleSheet, StatusBar, View, Text, TouchableHighlight } from 'react-native';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';
import { generateVideoName } from '../module/nameGenerator';

let VideoPlayer = React.createClass({
  getInitialState() {
    return {
      rate: 1,
      volume: 1,
      paused: true,
      currentTime: 0.0,
      duration: 0.0,
      hideControl: false,
    }
  },
  render() {
    const { video } = this.props;
    const onLoad = (data) => {
      this.setState({duration: data.duration});
      this._video.seek(9);
    };
    const onProgress = (data) => {
      // if (data.currentTime > 20.0) this._video.seek(10);
      this.setState({currentTime: data.currentTime});
    };
    const getCurrentTimePercentage = () => {
      if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
      } else {
        return 0;
      }
    };
    const playButtonOnPress = () => {
      this.setState({paused: !this.state.paused});
    }
    const flexCompleted = getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - getCurrentTimePercentage()) * 100;
    const videoName = generateVideoName(video.name);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.wrapper}>
          <Video
            ref={ref => this._video = ref}
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
            <View style={styles.topControlBox}>
              <Text style={styles.videoTitle}>{videoName}</Text>
            </View>
            <View style={styles.middleControlBox}>
              <View style={styles.middleLeftBox}>

              </View>
              <View style={styles.centerBox}>
                <TouchableHighlight onPress={playButtonOnPress}
                 activeOpacity={0.8}
                 underlayColor={'rgb(200,200,0)'}>
                  <Text>Play</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.middleRightBox}>

              </View>
            </View>
            <View style={styles.bottomControlBox}>
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
    flexDirection: 'column',
    flex: 1
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
    height: 5,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 5,
    backgroundColor: '#2C2C2C',
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  topControlBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  middleControlBox: {
    flex: 9,
    flexDirection: 'row',
  },
  bottomControlBox: {
    flex: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: '200',
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  middleLeftBox: {
    flex: 1,
  },
  centerBox: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleRightBox: {
    flex: 1,
  }
})

export default VideoPlayer;
