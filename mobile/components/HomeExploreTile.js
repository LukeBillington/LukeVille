import React from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Text } from 'react-native';

class HomeExploreTile extends React.Component {

  getImage() {
    if(this.props.icon == 'ride') {
      return (
        <Image style={styles.image} source={require('../assets/rides.png')} />
      )
    }
    if(this.props.icon == 'show') {
      return (
        <Image style={styles.image} source={require('../assets/shows.png')} />
      )
    }
    if(this.props.icon == 'shop') {
      return (
        <Image style={styles.image} source={require('../assets/shop.png')} />
      )
    }
    if(this.props.icon == 'dine') {
      return (
        <Image style={styles.image} source={require('../assets/dine.png')} />
      )
    }
  }

  getLocation() {
    if(this.props.location) {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(this.props.location)}
        >
          <View style={styles.container}>
            { this.getImage() }
            <Text style={styles.title}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.container}
      >
        <View style={styles.container}>
          { this.getImage() }
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return this.getLocation();
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    backgroundColor: '#4EBAFB',
    width: Dimensions.get('window').width / 2 - 15,
    height: Dimensions.get('window').width / 2 - 15,
    marginBottom: 10,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1CA4FC',
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: 'roboto',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width / 2 - 15,
    height: Dimensions.get('window').width / 2 - 15,
  }
});

export default HomeExploreTile;
