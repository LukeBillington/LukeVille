import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Heading, Text } from '../styles';
import AttractionReservePeopleListItem from './AttractionReservePeopleListItem';

class AttractionReservePeopleList extends React.Component {

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
      <View style={styles.container}>
        <Heading>Who Is Going?</Heading>
        <ScrollView contentContainerStyle={styles.list}>
          {this.getPeople()}
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 1,
    position: 'relative',
  },
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  }
});

export default AttractionReservePeopleList;
