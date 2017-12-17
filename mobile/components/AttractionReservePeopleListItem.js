import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

class AttractionReservePeopleListItem extends React.Component {

  render() {
    if(this.props.person.checked) {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.userTogglePerson('person/' + this.props.person.id + '/toggle')}
        >
          <Image
            style={styles.image}
            source={{uri: this.props.person.photo_path}}
          />
          <Text style={styles.name}>{this.props.person.name}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.userTogglePerson('person/' + this.props.person.id + '/toggle')}
        style={{opacity: .5}}
      >
        <Image
          style={styles.image}
          source={{uri: this.props.person.photo_path}}
        />
        <Text style={styles.name}>{this.props.person.name}</Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    paddingTop: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'proxima',
  }
});

export default AttractionReservePeopleListItem;
