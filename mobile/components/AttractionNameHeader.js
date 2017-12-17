import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListText as Text, ListHeading as Heading } from '../styles';

class AttractionNameHeader extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Heading>{ this.props.name }</Heading>
        <Text>{ this.props.location }</Text>
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

export default AttractionNameHeader;
