import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import AttractionListItem from './AttractionListItem';

class AttractionList extends React.Component {

  getAttractions() {
    if(this.props.attractions) {
      let attractions = this.props.attractions;
      return Object.keys(attractions).map((key) => {
        if(this.props.location) {
          return (
            <AttractionListItem
              key={attractions[key].id}
              attraction={attractions[key]}
              navigation={this.props.navigation}
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
      <ScrollView>
        {this.getAttractions()}
      </ScrollView>
    );
  }
}

export default AttractionList;
