import React, { Component } from 'react';
import { View, Text, Heading } from '../styles';
import AttractionListItem from './AttractionListItem';
import './AttractionList.css';

class AttractionList extends Component {

  getAttractions() {
    if(this.props.attractions) {
      let attractions = this.props.attractions;
      return Object.keys(attractions).map((key) => {
        if(this.props.location) {
          return (
            <AttractionListItem
              key={attractions[key].id}
              attraction={attractions[key]}
              location={this.props.location}
            />
          );
        }
        return (
          <AttractionListItem
            key={attractions[key].id}
            attraction={attractions[key]}
          />
        );
      });
    }

    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  render() {
    return (
      <View classes='AttractionList_Container'>
        <Heading>Rides</Heading>
        <View classes='AttractionList_List'>
          {this.getAttractions()}
        </View>
      </View>
    );
  }

}

export default AttractionList
