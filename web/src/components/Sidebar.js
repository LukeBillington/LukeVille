import React, { Component } from 'react';
import UserPeopleList from './UserPeopleList';

class Sidebar extends Component {

  getPeople() {
    if(this.props.user.people) {
      return Object.keys(this.props.user.people).map((key) => {
        return (
          <div key={this.props.user.people[key].id} className="col-6">
            <div className="container">
              <img src={this.props.user.people[key].photo_path} className="img-fluid mx-auto d-block rounded-circle" />
            </div>
            <p className="text-center">{this.props.user.people[key].name}</p>
          </div>);
      });
    }
  }

  render() {
    return (
      <section className="col-2 bg-secondary text-white sidebar">
        <div className="container">
          <img src={this.props.user.photo_path} className="img-fluid mx-auto d-block rounded-circle" />
          <h2 className="text-center">{this.props.user.name}</h2>
          <hr />
          <UserPeopleList title="My group" people={this.props.user.people}/>
          <hr />
          <button className="btn btn-danger btn-block">Logout</button>
        </div>
      </section>
    );
  }
}

export default Sidebar;
