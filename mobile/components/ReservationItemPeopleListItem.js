import React from 'react';
import { View, Image } from 'react-native';
import { InfoBottom } from '../styles';

class ReservationItemPeopleListItem extends React.Component {

  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50, borderRadius: 25, marginBottom: 5}}
          source={{uri: this.props.person.photo_path}}
        />
        <InfoBottom>{this.props.person.name}</InfoBottom>
      </View>
    )
  }
}

export default ReservationItemPeopleListItem;
