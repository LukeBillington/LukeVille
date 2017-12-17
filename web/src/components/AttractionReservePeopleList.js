import React, { Component } from 'react';
import { View, Heading, Text } from '../styles';
import AttractionReservePeopleListItem from './AttractionReservePeopleListItem';
import './AttractionReservePeopleList.css';

class AttractionReservePeopleList extends Component {

  getPeople() {
    if(this.props.people) {
      let people = this.props.people;
      return Object.keys(people).map((key) => {
        return (
          <AttractionReservePeopleListItem
            key={people[key].id}
            person={people[key]}
            userTogglePerson={this.props.userTogglePerson}
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
      <View classes='AttractionReservePeopleList_Container'>
        <Heading>Who Is Going?</Heading>
        <View classes='AttractionReservePeopleList_List'>
          {this.getPeople()}
        </View>
      </View>
    )
  }

}

export default AttractionReservePeopleList;
