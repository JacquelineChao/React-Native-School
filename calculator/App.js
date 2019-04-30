import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    prevNumber: 0,
    currNumber: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>
          Calculator
        </Text>
        <View style={styles.displayContainer}>
          <Text style={styles.displayNumber}>
            {this.state.currNumber}
          </Text>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              AC
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              +/-
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              %
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              /
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              7
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              8
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              9
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              x
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              4
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              5
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              6
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              -
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              1
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              2
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              3
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight
            style={styles.zeroButton}
          >
            <Text style={styles.buttonText}>
              0
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              .
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              =
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appTitle: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: 'black',
  },
  displayContainer: {
    height: '14%',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  displayNumber: {
    marginRight: 20,
    fontFamily: 'Avenir',
    fontSize: 52,
    color: 'aquamarine',
  },
  rowContainer: {
    height: '16%',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  button: {
    width: '25%',
    borderWidth: 1,
    borderColor: 'aquamarine',
  },
  zeroButton: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'aquamarine',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 42,
    color: 'aquamarine',
  },
});
