import React, { Component } from 'react';

class UserPeopleListItem extends Component {

  render() {
    return (
      <div key={this.props.person.id} className="col-6">
        <div className="container">
          <img src={this.props.person.photo_path} className="img-fluid mx-auto d-block rounded-circle" />
        </div>
        <p className="text-center">{this.props.person.name}</p>
      </div>
    );
  }
}

export default UserPeopleListItem;
