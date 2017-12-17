import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, InfoTop } from '../styles';
import ReservationItemPeopleListItem from './ReservationItemPeopleListItem';

class ReservationItemPeopleList extends React.Component {

  getPeople() {
    if(this.props.people) {
      let people = this.props.people;
      return Object.keys(people).map((key) => {
        return (
          <ReservationItemPeopleListItem
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
        <InfoTop>Admit:</InfoTop>
        <View style={styles.list}>
          {this.getPeople()}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    marginBottom: 1,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default ReservationItemPeopleList;
