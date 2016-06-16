import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

let CourseRow = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../testAssets/210.jpg')}
          style={styles.image} />
        <View style={styles.infoBox}>
          <View style={styles.textBox}>
            <Text style={styles.title}>Boom Clap</Text>
            <Text style={styles.dancer}>Danced By Sannere</Text>
          </View>
          <View style={styles.iconBox}>
            <Text style={styles.learningNumber}>100人正在学</Text>
          </View>
        </View>
      </View>
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
    flexDirection: 'column',
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
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default CourseRow;
