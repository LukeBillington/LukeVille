import React, { Component } from 'react';
import { View, Text, Heading } from '../styles';
import ReservationItem from './ReservationItem';
import './ReservationList.css';

class ReservationList extends Component {

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
      <View classes='ReservationList_Container'>
        <Heading>{this.props.heading}</Heading>
        <View classes='ReservationList_List'>
          { this.getReservations() }
        </View>
      </View>
    )
  }

}

export default ReservationList;
