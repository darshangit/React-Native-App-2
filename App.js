import React from 'react';
import { Home } from "./app/views/Home";
import { Contact } from "./app/views/Contact";
import { createStackNavigator } from "react-navigation";
import { Video } from './app/views/Video';
import { VideoDetail } from './app/views/VideoDetail';
import { Register } from './app/views/Register';
import { Login } from './app/views/Login';
import { Quiz } from './app/views/Quiz';
import { Finish } from './app/views/QuizFinish';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  loginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  }
},
{
  initialRouteName: 'HomeRT'
});
export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}


