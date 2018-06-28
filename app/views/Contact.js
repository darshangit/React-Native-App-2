import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import { Header } from '../sections/Header';
import { createStackNavigator } from 'react-navigation';

export class Contact extends React.Component {
  // static navigationOptions = {
  //     header: null
  // }

  constructor(props) {
    super(props);
    this.state = { name: '', msg: '', email: '' };
  }

  clearFields = () => this.setState({ name: '', msg: '', email: '' });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigate = {navigate} message="Press to Login" />
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          placeholder="Name"
          style={styles.inputs}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />

        <TextInput
          placeholder="Message"
          style={styles.multiInput}
          onChangeText={text => this.setState({ msg: text })}
          value={this.state.msg}
          multiline={true}
          numberOfLines={4}
        />

        <TextInput
          placeholder="Text"
          style={styles.inputs}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />

        <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
          <Text style={styles.buttons}>Send Message</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
          <Text style={styles.buttons}>Reset Form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  multiInput: {
    flex: 2,
    width: '80%',
    paddingTop: 20,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
    borderColor: 'green'
  }
});
