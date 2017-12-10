import React, { Component } from 'react';

class DashboardExplore extends Component {

  render() {
    return (
      <section className="container py-3">
        <h2>Explore Luketopia</h2>
        <div className="row">
          <div className="col-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-body text-center">
                <h3 className="h4">Rides</h3>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card text-white bg-secondary mb-3">
              <div class="card-body text-center">
                <h3 className="h4">Shows</h3>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card text-white bg-secondary mb-3">
              <div class="card-body text-center">
                <h3 className="h4">Dining</h3>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card text-white bg-secondary mb-3">
              <div class="card-body text-center">
                <h3 className="h4">Shopping</h3>
              </div>
            </div>
          </div>
        </div>
        <hr />        
      </section>
    );
  }
}

export default DashboardExplore;
