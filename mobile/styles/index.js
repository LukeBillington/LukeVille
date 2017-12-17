import React from 'react';
import { StyleSheet, Text as ReactText, TouchableOpacity, View } from 'react-native'

export class Text extends React.Component {
  render() {
    return (
      <ReactText style={styles.text}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class Heading extends React.Component {
  render() {
    return (
      <ReactText style={styles.heading}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class ListHeading extends React.Component {
  render() {
    return (
      <ReactText style={styles.listHeading}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class ListText extends React.Component {
  render() {
    return (
      <ReactText style={styles.listText}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class InfoTop extends React.Component {
  render() {
    return (
      <ReactText style={styles.infoTop}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class InfoBottom extends React.Component {
  render() {
    return (
      <ReactText style={styles.infoBottom}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class InfoBig extends React.Component {
  render() {
    return (
      <ReactText style={styles.infoBig}>
        {this.props.children}
      </ReactText>
    );
  }
}

export class InfoSmall extends React.Component {
  render() {
    return (
      <ReactText style={styles.infoSmall}>
        {this.props.children}
      </ReactText>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'proxima',
    color: '#253A58',
  },
  heading: {
    fontFamily: 'proxima-semibold',
    color: '#253A58',
    fontSize: 18,
    marginBottom: 10
  },
  listHeading: {
    fontFamily: 'proxima-semibold',
    color: '#253A58',
    fontSize: 20,
    marginBottom: 3
  },
  listText: {
    fontFamily: 'proxima',
    color: '#253A58',
    fontSize: 16,
    marginBottom: 3
  },
  infoTop: {
    fontFamily: 'proxima-medium',
    color: '#8791A6',
    fontSize: 13,
    marginBottom: 5,
    textAlign: 'center',
  },
  infoBottom: {
    fontFamily: 'proxima',
    color: '#253A58',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
  infoBig: {
    fontFamily: 'proxima',
    color: '#253A58',
    fontSize: 32,
    textAlign: 'center',
  },
  infoSmall: {
    fontFamily: 'proxima-medium',
    color: '#253A58',
    fontSize: 20,
    textAlign: 'center',
  }
});
