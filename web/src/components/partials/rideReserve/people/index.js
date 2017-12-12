import React, { Component } from 'react';
import './RideReservePeople.css';

class RideReservePeople extends Component {

  getPeople() {
    if(this.props.people) {
      return Object.keys(this.props.people).map((key) => {
        return (
          <article>
            <img src={this.props.people[key].photo_path} />
            <p>{this.props.people[key].name}</p>
          </article>
        );
      });
    }
  }

  render() {
    return (
      <section className="RideReservePeople">
        <h3>Who's Going?</h3>
        <div>
          {this.getPeople()}
        </div>
      </section>
    );
  }

}

export default RideReservePeople;
