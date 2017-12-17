import React, { Component } from 'react';
import { View, InfoTop, InfoSmall } from '../styles';
import './AttractionTypeInfo.css';

class AttractionTypeInfo extends Component {

  render() {
      return (
        <View classes='AttractionTypeInfo_Container'>
          <InfoTop>Thrill Type</InfoTop>
          <InfoSmall>{ this.props.type }</InfoSmall>
        </View>
      )
    }

}

export default AttractionTypeInfo;
