import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { downloadVideo } from '../actions/learningCoursesActions';
import { generateVideoName } from '../module/nameGenerator';

let MyVideoRow = React.createClass({
  getInitialState() {
    return {
      progress: 0.0,
    }
  },
  render() {
    const { initDownload, video } = this.props;
    const { downloaded, played, name } = video;
    const updateProgress = (progress) => {
      const percentage = (progress.bytesWritten / progress.contentLength).toFixed(2);
      console.log(`progress: ${percentage}`)
      this.setState({progress: percentage});
    }
    return (
      <TouchableOpacity>
        <View style={styles.videoRow}>
          <Text style={{color: 'white', flex: 1}}>{generateVideoName(name)}</Text>
          <TouchableOpacity onPress={!downloaded ? () => initDownload(video, updateProgress) : () => {}}>
            <Text style={{color: 'white', flex: 1}}>{
              !downloaded ? '下载' :
              !played ? '还没学' : '学完了'
            }</Text>
          </TouchableOpacity>
          <Text style={{color: 'white'}}>{this.state.progress}</Text>
        </View>
      </TouchableOpacity>
    )
  }
})

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  videoRow: {
    backgroundColor: '#000000',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    width,
  },
})

const mapDispatchToProps = (dispatch) => ({
  initDownload: (video, updateProgress) => dispatch(downloadVideo(video, updateProgress)),
})

MyVideoRow = connect(null, mapDispatchToProps)(MyVideoRow);

export default MyVideoRow;
