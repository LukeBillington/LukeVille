import React, { Component } from 'react';
import { View, Image, Text } from '../styles';
import { Link } from 'react-router-dom';
import './HomePeopleListItem.css';

class HomePeopleListItem extends Component {

  reservationCount() {
    if(this.props.person.reservation_count > 0) {
      return (
        <View
          classes='HomePeopleListItem_Badge'
        >
          <Text
            classes='HomePeopleListItem_BadgeText'
          >
            {this.props.person.reservation_count}
          </Text>
        </View>
      );
    }
  }

  getButton() {
    return (
      <Link to={'/person/' + this.props.person.id}>
        <View
          classes='HomePeopleListItem_Container'
        >
          <Image
            classes='HomePeopleListItem_Image'
            source={this.props.person.photo_path}
          />
          {this.reservationCount()}
          <Text
            classes='HomePeopleListItem_Name'
          >
            {this.props.person.name}
          </Text>
        </View>
      </Link>
    )
  }

  render() {
    return this.getButton();
  }

}

export default HomePeopleListItem;
