import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFetchData } from '../actions/user';
import { Button, InfoSmall, Image, Text } from './';
import HomePeopleList from '../components/HomePeopleList';
import './sidebar.css';

class Sidebar extends Component {

  componentDidMount() {
    this.props.userFetchData('user');
  }

  render() {
    return(
      <aside className='sidebar'>
        <Image classes='sidebarPhoto' source={this.props.user.photo_path} />
        <InfoSmall classes='sidebarName'>{this.props.user.name}</InfoSmall>
        <HomePeopleList
          people={this.props.user.people}
        />
        <Text classes='sidebarLogout'>Logout</Text>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userHasErrored: state.userHasErrored,
    userIsLoading: state.userIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFetchData: (url) => dispatch(userFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
