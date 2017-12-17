import React, { Component } from 'react';
import { View, ListText as Text, ListHeading as Heading } from '../styles';
import './AttractionNameHeader.css';

class AttractionNameHeader extends React.Component {

  render() {
    return (
      <View classes='AttractionNameHeader_Container'>
        <Heading>{ this.props.name }</Heading>
        <Text>{ this.props.location }</Text>
      </View>
    )
  }

}

export default AttractionNameHeader;
