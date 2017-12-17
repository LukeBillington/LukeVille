import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

class HomePeopleListItem extends React.Component {

  reservationCount() {
    if(this.props.person.reservation_count > 0) {
      return (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{this.props.person.reservation_count}</Text>
        </View>
      );
    }
  }

  getButton() {
    if(this.props.navigation) {
      return (
        <TouchableOpacity style={styles.container}
        onPress={() => this.props.navigation.navigate('Person', {person: this.props.person})}
        >
          <Image
            style={styles.image}
            source={{uri: this.props.person.photo_path}}
          />
          {this.reservationCount()}
          <Text style={styles.name}>{this.props.person.name}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <View />
    );
  }

  render() {
    return this.getButton();
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 1.5,
    paddingBottom: 1.5,
    borderRadius: 25,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
  name: {
    paddingTop: 10,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'proxima',
  }
});

export default HomePeopleListItem;
