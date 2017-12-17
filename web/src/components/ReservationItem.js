import React, { Component } from 'react';
import { ScrollView, View } from '../styles';
import ReservationItemHeader from './ReservationItemHeader';
import ReservationItemTimes from './ReservationItemTimes';
import './ReservationItem.css';

class ReservationItem extends Component {

  render() {
    return (
      <View classes='ReservationItem_Container'>
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

export default ReservationItem;
