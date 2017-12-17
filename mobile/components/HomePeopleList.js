import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Heading } from '../styles';
import HomePeopleListItem from './HomePeopleListItem';

class HomePeopleList extends React.Component {

  getPeople() {
    if(this.props.people) {
      let people = this.props.people;
      return Object.keys(people).map((key) => {
        return (
          <HomePeopleListItem
            key={people[key].id}
            person={people[key]}
            navigation={this.props.navigation}
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
        <Heading>My Group</Heading>
        <ScrollView horizontal contentContainerStyle={styles.list}>
          { this.getPeople() }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  }
});

export default HomePeopleList;
