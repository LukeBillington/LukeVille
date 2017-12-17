import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Font } from 'expo';
import luketopiaApp from './reducers';
import thunk from 'redux-thunk';
import Root from './Root';

let store = createStore(luketopiaApp, applyMiddleware(thunk));

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'proxima': require('./assets/proxima-soft-regular.ttf'),
      'proxima-medium': require('./assets/proxima-soft-medium.ttf'),
      'proxima-semibold': require('./assets/proxima-soft-semibold.ttf'),
      'roboto': require('./assets/roboto-condensed-bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  fontRender() {
    if(this.state.fontLoaded) {
      return (
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="blue" barStyle="light-content"/>
          <Root store={store} />
        </View>
      )
    }
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  render() {
    return this.fontRender();
  }
}
