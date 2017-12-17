import React, { Component } from 'react';
import { View, Image } from '../styles';
import './ReservationItemHeader.css';

class ReservationItemHeader extends Component {

  render() {
    return (
      <View>
        <Image
          classes='ReservationItemHeader_Image'
          source={'http://localhost:8000' + this.props.header_path}
        />
      </View>
    )
  }

}

export default ReservationItemHeader;
