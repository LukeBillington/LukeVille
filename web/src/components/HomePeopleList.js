import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Heading } from '../styles';
import HomePeopleListItem from './HomePeopleListItem';
import './HomePeopleList.css';

class HomePeopleList extends Component {

  getPeople() {
    if(this.props.people) {
      let people = this.props.people;
      return Object.keys(people).map((key) => {
        return (
          <HomePeopleListItem
            key={people[key].id}
            person={people[key]}
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
      <View classes='HomePeopleList_Container'>
        <Heading classes='HomePeopleList_Heading'>My Group</Heading>
        <ScrollView horizontal={true} classes='HomePeopleList_List'>
          {this.getPeople()}
        </ScrollView>
      </View>
    )
  }

}

export default HomePeopleList;
