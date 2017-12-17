import React from 'react';
import { connect } from 'react-redux';
import { rideFetchData } from '../actions/ride';
import { ScrollView } from 'react-native';
import AttractionPhotoHeader from '../components/AttractionPhotoHeader';
import AttractionNameHeader from '../components/AttractionNameHeader';
import AttractionDescriptionInfo from '../components/AttractionDescriptionInfo';
import AttractionWaitTimeInfo from '../components/AttractionWaitTimeInfo';
import AttractionReserveButton from '../components/AttractionReserveButton';
import AttractionHeightRequirementInfo from '../components/AttractionHeightRequirementInfo';
import AttractionTypeInfo from '../components/AttractionTypeInfo';

class RideView extends React.Component {

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
      <ScrollView>
        <AttractionPhotoHeader
          photo_path={this.props.ride.photo_path}
        />
        <AttractionNameHeader
          name={this.props.ride.name}
          location={this.props.ride.location}
        />
        <AttractionDescriptionInfo
          description={this.props.ride.description}
        />
        <AttractionWaitTimeInfo
          wait_time={this.props.ride.wait_time}
        />
        <AttractionReserveButton
          attraction={this.props.ride}
          navigation={this.props.navigation}
          location='RideReserve1'
        />
        <AttractionHeightRequirementInfo
          height_requirement={this.props.ride.height_requirement}
        />
        <AttractionTypeInfo
          type={this.props.ride.type}
        />
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(RideView);
