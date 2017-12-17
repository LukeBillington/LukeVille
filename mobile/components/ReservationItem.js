import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ReservationItemHeader from './ReservationItemHeader';
import ReservationItemTimes from './ReservationItemTimes';

class ReservationItem extends React.Component {

  render() {
    return (
      <View style={styles.pass}>
        <ReservationItemHeader
          header_path={this.props.reservation.header_path}
        />
        <ReservationItemTimes
          start_time={this.props.reservation.start_time}
          end_time={this.props.reservation.end_time}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  pass: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  }
});

export default ReservationItem;
