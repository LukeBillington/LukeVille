import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardUpcomingReservations from './components/DashboardUpcomingReservations';
import DashboardExplore from './components/DashboardExplore';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      api_base: 'http://localhost:8000/api',
      user: {},
      rides: []
    }
  }

  componentDidMount() {
    this.getUser();
    this.getRides();
  }

  getUser() {
    axios.get(this.state.api_base + '/user')
    .then((data) => {
      this.setState({user: data.data.data});
    });
  }

  getRides() {
    axios.get(this.state.api_base + '/rides')
    .then((data) => {
      this.setState({rides: data.data.data});
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-2">
            <Sidebar user={this.state.user} />
          </div>
          <div className="col-10">
            <DashboardUpcomingReservations />
            <DashboardExplore rides={this.state.rides} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
