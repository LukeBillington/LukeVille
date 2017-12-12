import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFetchData } from '../../../actions/user';
import { rideFetchData } from '../../../actions/ride';
import GlobalNavbar from '../../partials/global/navbar';
import GlobalSidebar from '../../partials/global/sidebar';
import RideReservePeople from '../../partials/rideReserve/people';
import './RideReserveView.css';

class RideReserveView extends Component {

  componentDidMount() {
    this.props.userFetchData('user');
    this.props.rideFetchData('ride/' + this.props.match.params.id);
  }

  getTimes() {
    if(this.props.ride.ride_times) {
      return Object.keys(this.props.ride.ride_times).map((key) => {
        return (
          <option value={this.props.ride.ride_times[key].start_time}>
            {this.props.ride.ride_times[key].start_time}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <div className="RideReserveView">
        <GlobalNavbar />
        <GlobalSidebar user={this.props.user} />
        <main>
          <div className="RideHeader">
            <img src={'http://localhost:8000' + this.props.ride.photo_path} />
          </div>
          <div className="container">
            <section className="RideDetails">
              <h2>Reserve {this.props.ride.name}</h2>
              <p>Choose who is going and an available reservation time.</p>
              <hr />
              <RideReservePeople people={this.props.user.people} />
              <hr />
              <h3>Select a Time</h3>
              <p>
                <select>
                  {this.getTimes()}
                </select>
              </p>
              <hr />
              <p>
                <button>
                  Make Reservation
                </button>
              </p>
            </section>
          </div>
        </main>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userHasErrored: state.userHasErrored,
    userIsLoading: state.userIsLoading,
    ride: state.ride,
    rideHasErrored: state.rideHasErrored,
    rideIsLoading: state.rideIsLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFetchData: (url) => dispatch(userFetchData(url)),
    rideFetchData: (url) => dispatch(rideFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideReserveView);
