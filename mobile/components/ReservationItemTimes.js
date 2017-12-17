import React from 'react';
import { StyleSheet, View } from 'react-native';
import { InfoTop, InfoBottom, InfoSmall } from '../styles';

class ReservationItemTimes extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <InfoTop>From</InfoTop>
        <InfoSmall>{this.props.start_time}</InfoSmall>
        <InfoTop>To</InfoTop>
        <InfoSmall>{this.props.end_time}</InfoSmall>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    marginBottom: 1,
  }
});

export default ReservationItemTimes;
