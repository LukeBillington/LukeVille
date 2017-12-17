import React, { Component } from 'react';
import { View, InfoTop, InfoBottom, InfoSmall } from '../styles';
import './AttractionHeightRequirementInfo.css';

class AttractionHeightRequirementInfo extends Component {

  render() {
    if(this.props.height_requirement) {
      return (
        <View classes='AttractionHeightRequirementInfo_Container'>
          <InfoTop>Guests Must Be</InfoTop>
          <InfoSmall>{this.props.height_requirement}</InfoSmall>
          <InfoBottom>Inches or Taller</InfoBottom>
        </View>
      )
    }
    return (
      <View classes='AttractionHeightRequirementInfo_Container'>
        <InfoTop>Guests Can Be</InfoTop>
        <InfoSmall>Any Height</InfoSmall>
      </View>
    )
  }

}

export default AttractionHeightRequirementInfo;
