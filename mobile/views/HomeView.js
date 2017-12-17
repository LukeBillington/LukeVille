import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { userFetchData } from '../actions/user';
import HomePeopleList from '../components/HomePeopleList';
import HomeExplore from '../components/HomeExplore';

class HomeView extends React.Component {

  static navigationOptions = {
    title: 'Luketopia',
    headerBackTitle: 'Home',
    headerStyle: {
      backgroundColor: '#043561',
    },
    headerTitleStyle: {
      fontFamily: 'roboto',
      fontSize: 24,
    },
    headerTintColor: 'white',
  }

  componentDidMount() {
    this.props.userFetchData('user');
  }

  render() {
    return (
      <View>
        <HomePeopleList
          people={this.props.user.people}
          navigation={this.props.navigation}
        />
        <HomeExplore
          navigation={this.props.navigation}
        />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
