import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Heading } from '../styles';
import HomeExploreTile from './HomeExploreTile';

class HomeExplore extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Heading style={styles.heading}>Explore</Heading>
        <View style={styles.list}>
          <HomeExploreTile
            name="Rides"
            navigation={this.props.navigation}
            location={'Rides'}
            icon='ride'
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
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default HomeExplore;
