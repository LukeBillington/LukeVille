import React, { Component } from 'react';
import { View } from '../styles';
import { connect } from 'react-redux';
import { ridesFetchData } from '../actions/rides';
import AttractionList from '../components/AttractionList';

class RidesView extends Component {

  componentDidMount() {
    this.props.ridesFetchData('rides');
  }

  render() {
    return (
      <View>
        <AttractionList
          title='Rides'
          attractions={this.props.rides}
          location='/rides/'
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
