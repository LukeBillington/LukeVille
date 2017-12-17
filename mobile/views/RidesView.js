import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ridesFetchData } from '../actions/rides';
import AttractionList from '../components/AttractionList';

class RidesView extends React.Component {

  static navigationOptions = {
    title: 'Rides',
    headerStyle: {
      backgroundColor: '#043561',
    },
    headerTitleStyle: {
      fontFamily: 'roboto',
      fontSize: 24,
    },
    headerBackTitleStyle: {
      fontFamily: 'proxima',
    },
    headerTintColor: 'white',
  }

  componentDidMount() {
    this.props.ridesFetchData('rides');
  }

  render() {
    return (
      <View>
        <AttractionList
          attractions={this.props.rides}
          navigation={this.props.navigation}
          location='Ride'
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rides: state.rides,
    ridesHasErrored: state.ridesHasErrored,
    ridesIsLoading: state.ridesIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ridesFetchData: (url) => dispatch(ridesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RidesView);
