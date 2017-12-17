import React from 'react';
import { StyleSheet, View } from 'react-native';
import { InfoBig, InfoBottom } from '../styles';

class AttractionWaitTimeInfo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <InfoBig>{ this.props.wait_time }</InfoBig>
        <InfoBottom>Minute Wait</InfoBottom>
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

export default AttractionWaitTimeInfo;
