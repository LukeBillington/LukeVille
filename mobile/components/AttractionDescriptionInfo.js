import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../styles';

class AttractionDescriptionInfo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.description}</Text>
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

export default AttractionDescriptionInfo;
