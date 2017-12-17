import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation'
import axios from 'axios';

class AttractionReserveConfirmButton extends React.Component {

  bookReservation() {
    axios.get('http://localhost:8000/api/' + this.props.url)
    .then((data) => {
      this.props.navigation.dispatch(resetAction);
    });
  }

  getLocation() {
    if(this.props.location && this.props.url) {
      return (
        <View style={styles.container}>
          <Button
            onPress={() => this.bookReservation()}
            title='Book Reservation'
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Button
          title='Book Reservation'
        />
      </View>
    )
  }

  render() {
    return this.getLocation();
  }

}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Home'
    })
  ]
})

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

export default AttractionReserveConfirmButton;
