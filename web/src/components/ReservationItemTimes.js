import React, { Component } from 'react';
import { View, InfoTop, InfoBottom, InfoSmall} from '../styles';
import './ReservationItemTimes.css';

class ReservationItemTimes extends Component {

  render() {
    return (
      <View classes='ReservationItemTimes_Container'>
        <InfoTop>From</InfoTop>
        <InfoSmall>{this.props.start_time}</InfoSmall>
        <InfoTop>To</InfoTop>
        <InfoSmall>{this.props.end_time}</InfoSmall>
      </View>
    )
  }

}

export default ReservationItemTimes;
