import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userFetchData } from '../../../actions/user';
import { ridesFetchData } from '../../../actions/rides';
import GlobalNavbar from '../../partials/global/navbar';
import GlobalSidebar from '../../partials/global/sidebar';
import './RidesView.css';

class RidesView extends Component {

  componentDidMount() {
    this.props.userFetchData('user');
    this.props.ridesFetchData('rides');
  }

  getRides() {
    if(this.props.rides) {
      return Object.keys(this.props.rides).map((key) => {
        return (
          <article className="RideCard">
            <Link to={'/rides/' + this.props.rides[key].id}>
              <img src={'http://localhost:8000' + this.props.rides[key].photo_path} />
              <div className="container">
                <div className="left">
                  <h3>{this.props.rides[key].name}</h3>
                  <p>{this.props.rides[key].location}</p>
                </div>
                <div className="right">
                  <p>
                    <strong>{this.props.rides[key].wait_time}</strong>
                    Min Wait
                  </p>
                </div>
              </div>
              </Link>
          </article>
        );
      });
    }
  }

  render() {
    return (
      <div className="RidesView">
        <GlobalNavbar />
        <GlobalSidebar user={this.props.user} />
        <main>
          <div className="container">
            <h2>All Rides</h2>
            <section className="RideCardList">
              {this.getRides()}
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
    rides: state.rides,
    ridesHasErrored: state.ridesHasErrored,
    ridesIsLoading: state.ridesIsLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFetchData: (url) => dispatch(userFetchData(url)),
    ridesFetchData: (url) => dispatch(ridesFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RidesView);
