import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ReservationItemHeader from './ReservationItemHeader';
import ReservationItemTimes from './ReservationItemTimes';
import ReservationItemPeopleList from './ReservationItemPeopleList';

class AttractionReservationItem extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.pass}>
          <ReservationItemHeader
            header_path={this.props.attraction.header_path}
          />
          <ReservationItemTimes
            start_time={this.props.time.start_time}
            end_time={this.props.time.end_time}
          />
          <ReservationItemPeopleList
            people={this.props.people}
          />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 1,
  },
  pass: {
    display: 'flex',
    flexDirection: 'column',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  }
});

export default AttractionReservationItem;
