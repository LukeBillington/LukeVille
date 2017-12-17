import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ListText } from '../styles';

class AttractionReserveTimeListItem extends React.Component {

  getLocation() {
    if(this.props.location) {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate(this.props.location, {
            attraction: this.props.attraction,
            time: this.props.time
          })}
        >
          <ListText>{this.props.time.reservation_time}</ListText>
        </TouchableOpacity>
      )
    }
    return (
      <View />
    )
  }

  render() {
    return this.getLocation();
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20,
    backgroundColor: 'white',
    marginBottom: 1,
  }
});

export default AttractionReserveTimeListItem;
