import React, { Component } from 'react';
import { View, Heading, Text } from '../styles';
import './AttractionReserveTimeList.css';

class AttractionReserveTimeList extends Component {

  getTimes() {
    if(this.props.times) {
      let times = this.props.times;
      return Object.keys(times).map((key) => {
        return (
          <option value={times[key].id} key={times[key].id}>{times[key].reservation_time}</option>
        );
      });
    }
  }

  render() {
    return (
      <View classes='AttractionReserveTimeList_Container'>
        <Heading>Select A Time</Heading>
        <select onChange={(event) => {
          this.props.changeTime(event.target.value)
        }}>
          <option defaultValue disabled="disabled">Select a time:</option>
          {this.getTimes()}
        </select>
      </View>
    )
  }

}

export default AttractionReserveTimeList;
