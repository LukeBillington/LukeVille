import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFetchData } from './actions/user';
import { ridesFetchData } from './actions/rides';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardUpcomingReservations from './components/DashboardUpcomingReservations';
import DashboardExplore from './components/DashboardExplore';

class App extends Component {

  componentDidMount() {
    this.props.userFetchData('user');
    this.props.ridesFetchData('rides');
  }

  render() {
    if(this.props.ridesHasErrored) {
      return (
        <p>Sorry there was an error loading the data, please attempt again later.</p>
      )
    }
    if(this.props.ridesIsLoading) {
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-2">
            <Sidebar user={this.props.user} />
          </div>
          <div className="col-10">
            <DashboardUpcomingReservations />
            <DashboardExplore rides={this.props.rides} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userHasErrored: state.userHasErrored,
    userIsLoading: state.userIsLoading,
    rides: state.rides,
    ridesHasErrored: state.ridesHasErrored,
    ridesIsLoading: state.ridesIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFetchData: (url) => dispatch(userFetchData(url)),
    ridesFetchData: (url) => dispatch(ridesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
