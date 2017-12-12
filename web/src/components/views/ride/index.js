import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userFetchData } from '../../../actions/user';
import { rideFetchData } from '../../../actions/ride';
import GlobalNavbar from '../../partials/global/navbar';
import GlobalSidebar from '../../partials/global/sidebar';
import './RideView.css';

class RideView extends Component {

  componentDidMount() {
    this.props.userFetchData('user');
    this.props.rideFetchData('ride/' + this.props.match.params.id);
  }

  render() {
    return (
      <div className="RideView">
        <GlobalNavbar />
        <GlobalSidebar user={this.props.user} />
        <main>
          <div className="RideHeader">
            <img src={'http://localhost:8000' + this.props.ride.photo_path} />
          </div>
          <div className="container">
            <section className="RideDetails">
              <h2>{this.props.ride.name}</h2>
              <p>{this.props.ride.description}</p>
              <hr />
              <p>
                <strong>{this.props.ride.wait_time}</strong>
                Minute Wait
              </p>
              <hr />
              <p>
                <Link to={'/rides/' + this.props.ride.id + '/reserve'}>
                  <button>
                    Make Reservation
                  </button>
                </Link>
              </p>
              <hr />
              <p>
                Guests Must Be
                <strong>{this.props.ride.height_requirement}</strong>
                Inches Tall
              </p>
              <hr />
              <p>
                Thrill Type
                <strong>{this.props.ride.type}</strong>
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

export default connect(mapStateToProps, mapDispatchToProps)(RideView);
