import React from 'react';
import { connect } from 'react-redux';
import { rideFetchData } from '../actions/ride';
import { StyleSheet, View } from 'react-native';
import AttractionReserveProgress from '../components/AttractionReserveProgress';
import AttractionReserveTimeList from '../components/AttractionReserveTimeList';

class RideReserve2View extends React.Component {

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
    const { params } = this.props.navigation.state;
    this.props.rideFetchData('ride/' + params.attraction.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <AttractionReserveProgress
          step={2}
          steps={3}
        />
        <AttractionReserveTimeList
          times={this.props.ride.ride_times}
          navigation={this.props.navigation}
          location='RideReserve3'
          attraction={this.props.ride}
        />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    ride: state.ride,
    rideHasErrored: state.rideHasErrored,
    rideIsLoading: state.rideIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    rideFetchData: (url) => dispatch(rideFetchData(url))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RideReserve2View);
