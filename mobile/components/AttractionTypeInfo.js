import React from 'react';
import { StyleSheet, View } from 'react-native';
import { InfoTop, InfoSmall } from '../styles';

class AttractionTypeInfo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <InfoTop>Thrill Type</InfoTop>
        <InfoSmall>{ this.props.type }</InfoSmall>
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

export default AttractionTypeInfo;
