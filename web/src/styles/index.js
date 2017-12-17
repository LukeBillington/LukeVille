import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export class Header extends Component {
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Luketopia
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/rides'>
              Rides
            </Link>
          </li>
          <li>Shows</li>
          <li>Shop</li>
          <li>Dine</li>
        </ul>
      </nav>
    )
  }
}

export class View extends Component {
  render() {
    return (
      <div className={this.props.classes}>
        {this.props.children}
      </div>
    )
  }
}

export class ScrollView extends Component {

  getOrientation() {
    if(this.props.horizontal) {
      return(
        <div className={'ScrollViewX ' + this.props.classes}>
          {this.props.children}
        </div>
      )
    }
    return (
      <div className={'ScrollViewY ' + this.props.classes}>
        {this.props.children}
      </div>
    )
  }

  render() {
    return this.getOrientation();
  }
}

export class Image extends Component {
  render() {
    return (
      <img className={this.props.classes} src={this.props.source} />
    )
  }
}

export class Button extends Component {
  render() {
    return (
      <button className={'Button ' + this.props.classes}>
        {this.props.title}
      </button>
    )
  }
}

export class Text extends Component {
  render() {
    return (
      <p className={'Text ' + this.props.classes}>
        {this.props.children}
      </p>
    );
  }
}

export class Heading extends Component {
  render() {
    return (
      <h2 className={'Heading ' + this.props.classes}>
        {this.props.children}
      </h2>
    );
  }
}

export class ListHeading extends Component {
  render() {
    return (
      <h3 className={'ListHeading ' + this.props.classes}>
        {this.props.children}
      </h3>
    );
  }
}

export class ListText extends Component {
  render() {
    return (
      <p className={'ListText ' + this.props.classes}>
        {this.props.children}
      </p>
    );
  }
}

export class InfoTop extends Component {
  render() {
    return (
      <h4 className={'InfoTop ' + this.props.classes}>
        {this.props.children}
      </h4>
    );
  }
}

export class InfoBottom extends Component {
  render() {
    return (
      <p className={'InfoBottom ' + this.props.classes}>
        {this.props.children}
      </p>
    );
  }
}

export class InfoBig extends Component {
  render() {
    return (
      <p className={'InfoBig ' + this.props.classes}>
        {this.props.children}
      </p>
    );
  }
}

export class InfoSmall extends Component {
  render() {
    return (
      <p className={'InfoSmall ' + this.props.classes}>
        {this.props.children}
      </p>
    );
  }
}
