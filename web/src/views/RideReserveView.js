import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFetchData, userTogglePerson } from '../actions/user';
import { rideFetchData } from '../actions/ride';
import { View } from '../styles';
import AttractionPhotoHeader from '../components/AttractionPhotoHeader';
import AttractionNameHeader from '../components/AttractionNameHeader';
import AttractionReservePeopleList from '../components/AttractionReservePeopleList';
import AttractionReserveTimeList from '../components/AttractionReserveTimeList';
import AttractionReserveConfirmButton from '../components/AttractionReserveConfirmButton';

class RideReserveView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time_id: null,
    }
    this.changeTime = this.changeTime.bind(this);
  }

  componentDidMount() {
    this.props.userFetchData('user');
    this.props.rideFetchData('ride/' + this.props.match.params.id);
  }

  changeTime(time_id) {
    this.setState({time_id});
  }

  render() {
    return (
      <View>
        <AttractionPhotoHeader
          photo_path={this.props.ride.photo_path}
        />
        <AttractionNameHeader
          name={this.props.ride.name}
          location={this.props.ride.location}
        />
        <AttractionReservePeopleList
          people={this.props.user.people}
          userTogglePerson={this.props.userTogglePerson}
        />
        <AttractionReserveTimeList
          times={this.props.ride.ride_times}
          changeTime={this.changeTime}
        />
        <AttractionReserveConfirmButton
          time_id={this.state.time_id}
          user_id={this.props.user.id}
          url={'reserveRide/' + this.props.user.id + '/' + this.state.time_id}
          push_history={this.props.history.push}
        />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userHasErrored: state.userHasErrored,
    userIsLoading: state.userIsLoading,
    ride: state.ride,
    rideHasErrored: state.rideHasErrored,
    rideIsLoading: state.rideIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFetchData: (url) => dispatch(userFetchData(url)),
    userTogglePerson: (url) => dispatch(userTogglePerson(url)),
    rideFetchData: (url) => dispatch(rideFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideReserveView);
