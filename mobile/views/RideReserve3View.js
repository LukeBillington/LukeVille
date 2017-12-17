import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { userFetchData } from '../actions/user';
import AttractionReserveProgress from '../components/AttractionReserveProgress';
import AttractionReservationItem from '../components/AttractionReservationItem';
import AttractionReserveConfirmButton from '../components/AttractionReserveConfirmButton';

class RideReserve3View extends React.Component {

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
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <AttractionReserveProgress
          step={3}
          steps={3}
        />
        <AttractionReservationItem
          attraction={params.attraction}
          time={params.time}
          people={this.props.user.checked_people}
        />
        <AttractionReserveConfirmButton
          navigation={this.props.navigation}
          location='Home'
          url={'reserveRide/' + this.props.user.id + '/' + params.time.id}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RideReserve3View);
