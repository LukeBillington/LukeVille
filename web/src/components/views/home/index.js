import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFetchData } from '../../../actions/user';
import GlobalNavbar from '../../partials/global/navbar';
import GlobalSidebar from '../../partials/global/sidebar';

class HomeView extends Component {

  componentDidMount() {
    this.props.userFetchData('user');
  }

  render() {
    return (
      <div className="HomeView">
        <GlobalNavbar />
        <GlobalSidebar user={this.props.user} />
        <main>
          <div className="container">
            <h1>HomeView</h1>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFetchData: (url) => dispatch(userFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
