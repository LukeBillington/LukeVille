import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Heading } from '../styles';
import ReservationItem from './ReservationItem';

class ReservationList extends React.Component {

  getReservations() {
    if(this.props.reservations) {
      let reservations = this.props.reservations;
      return Object.keys(reservations).map((key) => {
        return (
          <ReservationItem key={key} reservation={reservations[key]} />
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
        <Heading>{this.props.heading}</Heading>
        <View contentContainerStyle={styles.list}>
          { this.getReservations() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 15,
    padding: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  }
});

export default ReservationList;
