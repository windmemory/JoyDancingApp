import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Video from 'react-native-video';
import { addCourseToLearn, downloadVideo } from '../actions/learningCoursesActions';
import { generateVideoName } from '../module/nameGenerator';

let MyCourseDetailPage = React.createClass({
  getInitialState() {
    return {
      playingIndex: 0,
      paused: true,
    }
  },
  render() {
    const { videos, name, dancer, description } = this.props.course;
    const { download } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
          {videos.map((video, index) => (
            <TouchableOpacity key={index} onPress={() => this.setState({playingIndex: index, paused: false})}>
              <View style={styles.videoRow}>
                <Text style={{color: 'white', flex: 1}}>{generateVideoName(video.name)}</Text>
                <TouchableOpacity onPress={() => download(video)}>
                  <Text style={{color: 'white', flex: 1}}>下载</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
    width
  },
  container: {
    paddingTop: 64,
  },
  videoRow: {
    backgroundColor: '#000000',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 5,
    width,
  },
})

const mapDispatchToProps = (dispatch) => ({
  download: (video) => dispatch(downloadVideo(video)),
})

MyCourseDetailPage = connect(null, mapDispatchToProps)(MyCourseDetailPage);

export default MyCourseDetailPage;
