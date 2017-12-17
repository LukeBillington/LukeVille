import React, { Component } from 'react';
import { Image, View, Text } from '../styles';
import { Link } from 'react-router-dom';
import './HomeExploreTile.css';

class HomeExploreTile extends Component {

  getImage() {
    if(this.props.icon == 'ride') {
      return (
        <Image
          classes='HomeExploreTile_Image'
          source={require('../assets/rides.png')}
        />
      )
    }
    if(this.props.icon == 'show') {
      return (
        <Image
          classes='HomeExploreTile_Image'
          source={require('../assets/shows.png')}
        />
      )
    }
    if(this.props.icon == 'shop') {
      return (
        <Image
          classes='HomeExploreTile_Image'
          source={require('../assets/shop.png')}
        />
      )
    }
    if(this.props.icon == 'dine') {
      return (
        <Image
          classes='HomeExploreTile_Image'
          source={require('../assets/dine.png')}
        />
      )
    }
  }

  getLocation() {
    if(this.props.location) {
      return (
        <Link to={this.props.location}>
          <View classes='HomeExploreTile_Container'>
            { this.getImage() }
            <Text classes='HomeExploreTile_Title'>{this.props.name}</Text>
          </View>
        </Link>
      )
    }
    return (
      <View classes='HomeExploreTile_Container'>
        { this.getImage() }
        <Text classes='HomeExploreTile_Title'>{this.props.name}</Text>
      </View>
    )
  }

  render() {
    return this.getLocation();
  }

}

export default HomeExploreTile;
