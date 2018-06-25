import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export class Video extends React.Component {
  // static navigationOptions = {
  //     header: null
  // }

  constructor(props) {
    super(props);
    this.state = { listLoaded: false };
  }

  componentDidMount = () => {
    return fetch(
      'https:/www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyDvCl3FAOr9z7Na_oyG8PhdmkF6srQ-HtM'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          listLoaded: true,
          videoList: Array.from(responseJson.items)
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
    <View>
        { this.state.listLoaded && (
            <View style={{paddingTop: 30}}>
            <View>
        )}
    </View>);
  }
}
