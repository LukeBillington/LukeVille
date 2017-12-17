import React from 'react';
import { StyleSheet, View } from 'react-native';
import { InfoTop, InfoBottom, InfoSmall } from '../styles';

class AttractionHeightRequirementInfo extends React.Component {

  render() {
    if(this.props.height_requirement) {
      return (
        <View style={styles.container}>
          <InfoTop>Guests Must Be</InfoTop>
          <InfoSmall>{this.props.height_requirement}</InfoSmall>
          <InfoBottom>Inches or Taller</InfoBottom>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <InfoTop>Guests Can Be</InfoTop>
        <InfoSmall>Any Height</InfoSmall>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    marginBottom: 1,
  }
});

export default AttractionHeightRequirementInfo;
