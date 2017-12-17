import React, { Component } from 'react';
import { View, Button } from '../styles';
import { Link } from 'react-router-dom';
import './AttractionReserveButton.css';

class AttractionReserveButton extends Component {

  getLocation() {
    if(this.props.location) {
      return (
        <Link to={this.props.location + this.props.attraction.id + '/reserve'}>
          <Button
            title='Make Reservation'
          />
        </Link>
      )
    }
    return (
      <Button
        title='Make Reservation'
      />
    )
  }

  render() {
    return (
      <View classes='AttractionReserveButton_Container'>
        {this.getLocation()}
      </View>
    );
  }

}

export default AttractionReserveButton;
