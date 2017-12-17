import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rideFetchData } from '../actions/ride';
import { View } from '../styles';
import AttractionPhotoHeader from '../components/AttractionPhotoHeader';
import AttractionNameHeader from '../components/AttractionNameHeader';
import AttractionDescriptionInfo from '../components/AttractionDescriptionInfo';
import AttractionReserveButton from '../components/AttractionReserveButton';
import AttractionHeightRequirementInfo from '../components/AttractionHeightRequirementInfo';
import AttractionTypeInfo from '../components/AttractionTypeInfo';

class RideView extends Component {

  componentDidMount() {
    this.props.rideFetchData('ride/' + this.props.match.params.id);
  }

  render() {
    return (
      <View>
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
        <AttractionReserveButton
          attraction={this.props.ride}
          navigation={this.props.navigation}
          location='/rides/'
        />
        <AttractionHeightRequirementInfo
          height_requirement={this.props.ride.height_requirement}
        />
        <AttractionTypeInfo
          type={this.props.ride.type}
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

export default connect(mapStateToProps, mapDispatchToProps)(RideView);
