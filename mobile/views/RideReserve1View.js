import React from 'react';
import { connect } from 'react-redux';
import { userFetchData, userTogglePerson } from '../actions/user';
import { StyleSheet, View } from 'react-native';
import AttractionReserveProgress from '../components/AttractionReserveProgress';
import AttractionReservePeopleList from '../components/AttractionReservePeopleList';
import AttractionReserveNextButton from '../components/AttractionReserveNextButton';

class RideReserve1View extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.attraction.name,
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: '#043561',
    },
    headerTitleStyle: {
      fontFamily: 'roboto',
      fontSize: 24,
    },
    headerBackTitleStyle: {
      fontFamily: 'proxima',
    },
    headerTintColor: 'white',
  })

  componentDidMount() {
    this.props.userFetchData('user');
  }

  render() {
    return (
      <View style={styles.container}>
        <AttractionReserveProgress
          step={1}
          steps={3}
        />
        <AttractionReservePeopleList
          people={this.props.user.people}
          userTogglePerson={this.props.userTogglePerson}
        />
        <AttractionReserveNextButton
          attraction={this.props.navigation.state.params.attraction}
          navigation={this.props.navigation}
          location='RideReserve2'
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
    userFetchData: (url) => dispatch(userFetchData(url)),
    userTogglePerson: (url) => dispatch(userTogglePerson(url)),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RideReserve1View);
