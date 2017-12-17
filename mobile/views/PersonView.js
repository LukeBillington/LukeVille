import React from 'react';
import { connect } from 'react-redux';
import { personFetchData } from '../actions/person';
import { ScrollView, View, Text } from 'react-native';
import ReservationList from '../components/ReservationList';

class PersonView extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.person.name,
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
    this.props.personFetchData('person/' + params.person.id);
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
