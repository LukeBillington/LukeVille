import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Heading, Text } from '../styles';
import AttractionReserveTimeListItem from './AttractionReserveTimeListItem';

class AttractionReserveTimeList extends React.Component {

  getTimes() {
    if(this.props.times) {
      let times = this.props.times;
      return Object.keys(times).map((key) => {
        return (
          <AttractionReserveTimeListItem
            key={times[key].id}
            time={times[key]}
            navigation={this.props.navigation}
            location={this.props.location}
            attraction={this.props.attraction}
          />
        );
      });
    }
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.margins}>
          <Heading>Select A Time</Heading>
        </View>
        <ScrollView style={styles.list}>
          {this.getTimes()}
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
    marginBottom: 1,
  },
  margins: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10,
  },
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
});

export default AttractionReserveTimeList;
