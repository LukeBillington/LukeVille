import React, { Component } from 'react';
import './GlobalSidebar.css';

class GlobalSidebar extends Component {

  getPeople() {
    if(this.props.user.people) {
      return Object.keys(this.props.user.people).map((key) => {
        return (
          <article>
            <img src={this.props.user.people[key].photo_path} />
            <p>{this.props.user.people[key].name}</p>
          </article>
        );
      });
    }
  }

  render() {
    return (
      <aside className="GlobalSidebar">
        <section className="MyProfile">
          <img src={this.props.user.photo_path} />
          <h2>{this.props.user.name}</h2>
        </section>
        <hr />
        <section className="MyGroup">
          <h3>My Group</h3>
          <div>
            {this.getPeople()}
          </div>
        </section>
        <hr />
      </aside>
    );
  }

}

export default GlobalSidebar;
