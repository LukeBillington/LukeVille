import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import PersonView from './views/PersonView';
import RidesView from './views/RidesView';
import RideView from './views/RideView';
import RideReserveView from './views/RideReserveView';
import { Header } from './styles';
import Sidebar from './styles/sidebar';

class Base extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header />
            <main>
              <div className='leftSide'>
                <Sidebar />
              </div>
              <div className='rightSide'>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/rides" component={RidesView} />
                <Route exact path="/rides/:id" component={RideView} />
                <Route exact path="/rides/:id/reserve" component={RideReserveView} />
                <Route exact path="/person/:id" component={PersonView} />
              </div>
            </main>
          </div>
        </Router>
    );
  }
}

export default Base;
