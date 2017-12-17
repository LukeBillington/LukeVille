import React, { Component } from 'react';
import { View, Text, Heading } from '../styles';
import HomeExploreTile from './HomeExploreTile';
import './HomeExplore.css';

class HomeExplore extends Component {

  render() {
    return (
      <View classes='HomeExplore_Container'>
        <Heading>Explore</Heading>
        <View classes='HomeExplore_List'>
          <HomeExploreTile
            name="Rides"
            icon='ride'
            location='/rides'
          />
          <HomeExploreTile
            name="Shows"
            icon='show'
          />
          <HomeExploreTile
            name="Shop"
            icon='shop'
          />
          <HomeExploreTile
            name="Dine"
            icon='dine'
          />
        </View>
      </View>
    )
  }

}

export default HomeExplore;
