import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

class AttractionReserveProgress extends React.Component {

  getDots() {
    if(this.props.steps && this.props.step) {
      let i = 1;
      let output = [];
      while(i <= this.props.steps) {

        if(i < this.props.step) {
          output.push(
            <View key={i} style={styles.dotCurrent} />
          )
        } else if (i == this.props.step) {
          output.push(
            <View key={i} style={styles.dotCurrent} />
          )
        } else {
          output.push(
            <View key={i} style={styles.dotFuture} />
          )
        }
        i++;
      }
      return output;
    }
  }

  getBarFill() {
    if(this.props.steps && this.props.step) {
      let head = this.props.step - 1;
      let end = this.props.steps - 1;
      let width = Dimensions.get('window').width - 20;
      let amount = head / end;
      let barWidth = width * amount;
      return (
        <View style={{
          width: barWidth,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#16AAFE',
          position: 'absolute',
          top: 26,
          left: 10,
        }}/>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar} />
        {this.getBarFill()}
        <View style={styles.dots}>
          {this.getDots()}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    marginBottom: 1,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  dots: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  dotCurrent: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#16AAFE',
  },
  dotFuture: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#8791A6',
  },
  bar: {
    width: Dimensions.get('window').width - 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8791A6',
    position: 'absolute',
    top: 26,
    left: 10,
  }
});

export default AttractionReserveProgress;
