import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from 'react-native';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwrd: '',
      passwrdConfirm: ''
    };
  }

  cancelRegister = () => {
    Alert.alert('Registration Cancelled');
    this.props.navigation.navigate('HomeRT');
  };

  registerAccount = () => {
    if (!this.state.username) {
      Alert.alert('Please enter a username');
    } else if (this.state.passwrd !== this.state.passwrdConfirm) {
      Alert.alert('Passwords do not match');
    } else {
      AsyncStorage.getItem(this.state.username, (err, result) => {
        if (result !== null) {
          Alert.alert(`${this.state.username} already exists`);
        } else {
          AsyncStorage.setItem(
            this.state.username,
            this.state,
            passwrd,
            (err, result) => {
              Alert.alert(`${this.state.username} account created`);
              this.props.navigation.navigate('HomeRT');
            }
          );
        }
      });
    }
  };

  render() {
      return(
          
      )
  }
}
