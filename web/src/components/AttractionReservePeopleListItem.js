import React, { Component } from 'react';
import { View, Image, Text } from '../styles';
import './AttractionReservePeopleListItem.css';

class AttractionReservePeopleListItem extends Component {

  render() {
    if(this.props.person.checked) {
      return (
        <a
          onClick={() => this.props.userTogglePerson('person/' + this.props.person.id + '/toggle')}
        >
          <View classes='AttractionReservePeopleListItem_SelectedContainer'>
            <Image
              classes='AttractionReservePeopleListItem_Image'
              source={this.props.person.photo_path}
            />
            <Text
              classes='AttractionReservePeopleListItem_Name'
            >
              {this.props.person.name}
            </Text>
          </View>
        </a>
      )
    }
    return (
      <a
        onClick={() => this.props.userTogglePerson('person/' + this.props.person.id + '/toggle')}
      >
        <View classes='AttractionReservePeopleListItem_Container'>
          <Image
            classes='AttractionReservePeopleListItem_Image'
            source={this.props.person.photo_path}
          />
          <Text
            classes='AttractionReservePeopleListItem_Name'
          >
            {this.props.person.name}
          </Text>
        </View>
      </a>
    )
  }

}

export default AttractionReservePeopleListItem;
