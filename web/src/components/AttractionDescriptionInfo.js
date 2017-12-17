import React, { Component } from 'react';
import { View, Text } from '../styles';
import './AttractionDescriptionInfo.css';

class AttractionDescriptionInfo extends Component {

  render() {
    return (
      <View classes='AttractionDescriptionInfo_Container'>
        <Text>{this.props.description}</Text>
      </View>
    )
  }

}

export default AttractionDescriptionInfo;
