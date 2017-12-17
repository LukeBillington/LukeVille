import React, { Component } from 'react';
import { View, Button } from '../styles';
import axios from 'axios';
import './AttractionReserveConfirmButton.css';

class AttractionReserveConfirmButton extends Component {

  bookReservation() {
    axios.get('http://localhost:8000/api/' + this.props.url)
    .then((data) => {
      this.props.push_history('/');
    });
  }

  getData() {
    if(this.props.user_id && this.props.time_id) {
      return (
        <View classes='AttractionReserveConfirmButton_Container'>
          <a
            onClick={() => this.bookReservation()}
          >
            <Button
              title='Book Reservation'
            />
          </a>
        </View>
      )
    }
    return (
      <View classes='AttractionReserveConfirmButton_Container'>
        <Button
          classes='AttractionReserveConfirmButton_ButtonDisabled'
          title='Book Reservation'
        />
      </View>
    )
  }

  render() {
    return this.getData();
  }

}

export default AttractionReserveConfirmButton;
