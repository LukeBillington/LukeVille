import React, { Component } from 'react';
import { View, ListText as Text, ListHeading as Heading, InfoSmall, InfoBottom, Image } from '../styles';
import { Link } from 'react-router-dom';
import './AttractionListItem.css';

class AttractionListItem extends Component {

  getLocation() {
    if(this.props.location) {
      return (
        <Link to={this.props.location + this.props.attraction.id}>
          <View classes='AttractionListItem_Container'>
            <View>
              <Image
                classes='AttractionListItem_Image'
                source={'http://localhost:8000' + this.props.attraction.photo_path}
              />
            </View>
            <View classes='AttractionListItem_RideInfo'>
              <Heading>{this.props.attraction.name}</Heading>
              <Text>{this.props.attraction.location}</Text>
            </View>
          </View>
        </Link>
      )
    }
    return (
      <View classes='AttractionListItem_Container'>
        <View classes='AttractionListItem_RideInfo'>
          <Heading>{this.props.attraction.name}</Heading>
          <Text>{this.props.attraction.location}</Text>
        </View>
        <View classes='AttractionListItem_WaitInfo'>
          <InfoSmall>{this.props.attraction.wait_time}</InfoSmall>
          <InfoBottom>Min Wait</InfoBottom>
        </View>
      </View>
    )
  }

  render() {
    return this.getLocation();
  }

}

export default AttractionListItem;
