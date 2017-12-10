import React, { Component } from 'react';
import UserPeopleListItem from './UserPeopleListItem';

class UserPeopleList extends Component {

  getPeople() {
    if(this.props.people) {
      let people = this.props.people;
      return Object.keys(people).map((key) => {
        return (
          <UserPeopleListItem person={people[key]} />
        );
      });
    }
  }

  render() {
    return (
      <section>
        <h3 className="h5">{this.props.title}</h3>
        <div className="row">
          { this.getPeople() }
        </div>
      </section>
    );
  }
}

export default UserPeopleList;
