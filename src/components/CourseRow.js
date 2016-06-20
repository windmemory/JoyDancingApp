import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

let CourseRow = React.createClass({
  render() {
    if (this.props.course === undefined) return;
    const { name, dancer } = this.props.course;
    const totalPart = Object.keys(this.props.course.videos).length - 1;
    return (
      <TouchableOpacity onPress={() => Actions.courseDetail({title: this.props.course.name, course: this.props.course})}>
        <View style={styles.container}>
          <Image
            source={require('../../testAssets/superstar.jpg')}
            style={styles.image} />
          <View style={styles.infoBox}>
            <View style={styles.textBox}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.dancer}>教学老师：{dancer}</Text>
            </View>
            <View style={styles.iconBox}>
              <Text style={styles.totalPart}>教学共{totalPart}部分</Text>
              <Text style={styles.learningNumber}>100人正在学</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
})

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: width,
    height: width / 16 * 9,
    flex: 1,
  },
  infoBox: {
    height: width / 6,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textBox: {
    flex: 1,
  },
  iconBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 25,
    fontWeight: '200',
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  dancer: {
    color: 'black',
    fontSize: 13,
    fontWeight: '100',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  learningNumber: {
    fontWeight: '200',
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  totalPart: {
    fontWeight: '200',
    fontSize: 10,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
  }
});

export default CourseRow;
