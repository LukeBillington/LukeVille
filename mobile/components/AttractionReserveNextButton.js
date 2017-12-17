import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class AttractionReserveNextButton extends React.Component {

  getLocation() {
    if(this.props.location) {
      return (
        <View style={styles.container}>
          <Button
            onPress={() => this.props.navigation.navigate(this.props.location, {attraction: this.props.attraction})}
            title='Next'
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Button
          title='Next'
        />
      </View>
    )
  }

  render() {
    return this.getLocation();
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: 'white',
    marginBottom: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  }
});

export default AttractionReserveNextButton;
