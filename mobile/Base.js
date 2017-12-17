import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import HomeView from './views/HomeView';
import PersonView from './views/PersonView';
import RidesView from './views/RidesView';
import RideView from './views/RideView';
import RideReserve1View from './views/RideReserve1View';
import RideReserve2View from './views/RideReserve2View';
import RideReserve3View from './views/RideReserve3View';
import { connectionState } from './actions/network';
import { NetInfo } from 'react-native';

const Navigation = StackNavigator({
  Home: { screen: HomeView },
  Person: { screen: PersonView },
  Rides: { screen: RidesView },
  Ride: { screen: RideView },
  RideReserve1: { screen: RideReserve1View },
  RideReserve2: { screen: RideReserve2View },
  RideReserve3: { screen: RideReserve3View }
});

class Base extends React.Component {

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
  }

  handleConnectionChange = (isConnected) => {
    this.props.dispatch(connectionState({status: isConnected}));
  }

  render() {
    return (
      <Navigation />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isConnected: state.isConnected,
  }
}

export default connect(mapStateToProps)(Base);
