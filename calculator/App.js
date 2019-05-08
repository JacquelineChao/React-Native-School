//import
import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';

//export
export default class App extends Component {

  constructor(props) {
    super(props);
    this.appendDigit = this.appendDigit.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  state = {
    prevNumber: 0,
    currNumber: 0,

    operator: '+',
  }

  //function
  clear = () => {
    this.setState({
      prevNumber: 0,
      currNumber: 0,

      operator: '+',
    })
  }

  switchSign = () => {
    this.setState({
      currNumber: this.state.currNumber * -1,
    })
  }

  percent = () => {
    this.setState({
      currNumber: this.state.currNumber * 0.01,
    })
  }

  appendDigit = (digit) => {
    this.setState({
      currNumber: this.state.currNumber * 10 + digit,
    })
  }

  addDigit = (digit) => {
    this.setState({
      prevNumber: this.state.currNumber,
      currNumber: 0,

      operator: digit,
    })
  }

  subtractDigit = (digit) => {
    this.setState({
      prevNumber: this.state.currNumber,
      currNumber: 0,

      operator: digit,
    })
  }

  multiplyDigit = (digit) => {
    this.setState({
      prevNumber: this.state.currNumber,
      currNumber: 0,

      operator: digit,
    })
  }

  divideDigit = (digit) => {
    this.setState({
      prevNumber: this.state.currNumber,
      currNumber: 0,

      operator: digit,
    })
  }

  equals = () => {
    if (this.state.operator === '+') {
      this.setState({
        currNumber: this.state.prevNumber + this.state.currNumber,
      })
    } else if (this.state.operator === '-') {
      this.setState({
        currNumber: this.state.prevNumber - this.state.currNumber,
      })
    } else if (this.state.operator === 'x') {
      this.setState({
        currNumber: this.state.prevNumber * this.state.currNumber,
      })
    } else if (this.state.operator === '/') {
      this.setState({
        currNumber: this.state.prevNumber / this.state.currNumber,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <Text style={styles.symbolText}>
            {this.state.currNumber}
          </Text>
        </View>

        <View style={styles.rowContainer}>
          <Symbol sym='AC' updateDigit={this.clear}/>
          <Symbol sym='+/-' updateDigit={this.switchSign}/>
          <Symbol sym='%' updateDigit={this.percent}/>
          <Symbol sym='/' updateDigit={this.divideDigit}/>
        </View>

        <View style={styles.rowContainer}>
          <Symbol sym={7} updateDigit={this.appendDigit}/>
          <Symbol sym={8} updateDigit={this.appendDigit}/>
          <Symbol sym={9} updateDigit={this.appendDigit}/>
          <Symbol sym='x' updateDigit={this.multiplyDigit}/>
        </View>

        <View style={styles.rowContainer}>
          <Symbol sym={4} updateDigit={this.appendDigit}/>
          <Symbol sym={5} updateDigit={this.appendDigit}/>
          <Symbol sym={6} updateDigit={this.appendDigit}/>
          <Symbol sym='-' updateDigit={this.subtractDigit}/>
        </View>

        <View style={styles.rowContainer}>
          <Symbol sym={1} updateDigit={this.appendDigit}/>
          <Symbol sym={2} updateDigit={this.appendDigit}/>
          <Symbol sym={3} updateDigit={this.appendDigit}/>
          <Symbol sym='+' updateDigit={this.addDigit}/>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight
            style={styles.zeroButton}
            onPress={() => this.appendDigit(0)}
          >
            <Text style={styles.symbolText}>
              0
            </Text>
          </TouchableHighlight>
          <Symbol sym='.' updateDigit={this.decimal}/>
          <Symbol sym='=' updateDigit={this.equals}/>
        </View>

      </View>
    );
  }
}

//prop
class Symbol extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.updateDigit(this.props.sym);
          }}
        >
          <Text style={styles.symbolText}>
            {this.props.sym}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
  },
  displayContainer: {
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    width: 80,
    marginLeft: 10,
    borderWidth: 4,
    borderRadius: 360,
    borderColor: 'white',
  },
  zeroButton: {
    width: 170,
    height: 75,
    marginLeft: 10,
    borderWidth: 4,
    borderRadius: 360,
    borderColor: 'white',
  },
  symbolText: {
    fontFamily: 'Avenir',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  }
});

//Problem? Button widths and heights are defined.
