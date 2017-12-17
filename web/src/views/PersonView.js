import React, { Component } from 'react';
import { connect } from 'react-redux';
import { personFetchData } from '../actions/person';
import { ScrollView, View, Text } from '../styles';
import ReservationList from '../components/ReservationList';

class PersonView extends Component {

  componentDidMount() {
    this.props.personFetchData('person/' + this.props.match.params.id);
  }

  getCurrentReservations() {
    if(this.props.person.current_reservations && this.props.person.current_reservations.length > 0) {
      return (
        <View>
          <ReservationList
            heading='Current Reservations'
            reservations={this.props.person.current_reservations}
          />
        </View>
      )
    }
  }

  getFutureReservations() {
    if(this.props.person.future_reservations && this.props.person.future_reservations.length > 0) {
      return (
        <View>
          <ReservationList
          heading='Future Reservations'
          reservations={this.props.person.future_reservations}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <ScrollView>
        { this.getCurrentReservations() }
        { this.getFutureReservations() }
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    person: state.person,
    personHasErrored: state.personHasErrored,
    personIsLoading: state.personIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    personFetchData: (url) => dispatch(personFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonView);
