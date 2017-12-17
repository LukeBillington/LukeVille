import React from 'react';
import { Image, Dimensions } from 'react-native';

class ReservationItemHeader extends React.Component {

  render() {
    return (
      <Image
        style={{width: Dimensions.get('window').width - 20, height: (Dimensions.get('window').width - 20) * .4}}
        source={{uri: 'http://localhost:8000' + this.props.header_path}}
      />
    )
  }

}

export default ReservationItemHeader;
