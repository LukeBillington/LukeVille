import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

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
        <Sidebar user={this.state.user} rides={this.state.rides} />
      </div>
    );
  }
}

export default App;
