import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class AttractionReserveButton extends React.Component {

  getLocation() {
    if(this.props.location) {
      return (
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate(this.props.location, {attraction: this.props.attraction})}
          title='Make Reservation'
        />
      )
    }
    return (
      <Button
        style={styles.button}
        title='Make Reservation'
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getLocation()}
      </View>
    );
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
  }
});

export default AttractionReserveButton;
