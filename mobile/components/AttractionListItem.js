import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ListText as Text, ListHeading as Heading, InfoSmall, InfoBottom } from '../styles';

class AttractionListItem extends React.Component {

  getLocation() {
    if(this.props.location) {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(this.props.location, {attraction: this.props.attraction})}
          style={styles.container}
        >
          <View style={styles.rideInfo}>
            <Heading>{this.props.attraction.name}</Heading>
            <Text>{this.props.attraction.location}</Text>
          </View>
          <View style={styles.waitInfo}>
            <InfoSmall>{this.props.attraction.wait_time}</InfoSmall>
            <InfoBottom>Min Wait</InfoBottom>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.container}
      >
        <View style={styles.rideInfo}>
          <Heading>{this.props.attraction.name}</Heading>
          <Text>{this.props.attraction.location}</Text>
        </View>
        <View style={styles.waitInfo}>
          <InfoSmall>{this.props.attraction.wait_time}</InfoSmall>
          <InfoBottom>Min Wait</InfoBottom>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return this.getLocation();
  }
}

export default AttractionListItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    marginBottom: 1,
  },
  rideInfo: {
    flex: 3,
  },
  waitInfo: {
    flex: 1,
    paddingTop: 7,
  }
});
