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
    console.log(video);
    const { downloadProgress, playProgress, name } = video;
    return (
      <TouchableOpacity>
        <View style={styles.videoRow}>
          <Text style={{color: 'white', flex: 1}}>{generateVideoName(name)}</Text>
          <TouchableOpacity onPress={downloadProgress === -1 ? () => initDownload(video) : () => {}}>
            <Text style={{color: 'white', flex: 1}}>{
              downloadProgress === -1 ? '下载' : downloadProgress
            }</Text>
          </TouchableOpacity>
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

const mapStateToProps = (state, ownProps) => {
  const keys = ownProps.videoId.split('-');
  return {
    video: state.learningCourses.filter(course => course.objectId === keys[0])[0].videos[keys[1]],
  }
}

const mapDispatchToProps = (dispatch) => ({
  initDownload: (video) => dispatch(downloadVideo(video)),
})

MyVideoRow = connect(mapStateToProps, mapDispatchToProps)(MyVideoRow);

export default MyVideoRow;
