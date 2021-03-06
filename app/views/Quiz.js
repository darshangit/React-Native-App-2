import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { QuizData } from '../data/QuizQuestions';
import { Question } from "../sections/Questions";
export class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionLoaded: false,
      totalScore: 100,
      completeQuiz: false
    };
  }

  componentDidMount() {
    let numQuestions = Array.from(QuizData.questions).length;
    this.setState({
      questList: Array.from(QuizData.questions),
      questionLoaded: true,
      numberOfQuestions: numQuestions,
      incorrect: 0,
      questionAnswered: 0
    });
  }

  updateScore = penalty => {
    let tempScore = this.state.totalScore;
    let missed = this.state.incorrect;
    let questionsTotal = this.state.numberOfQuestions;
    let questionsDone = this.state.questionAnswered;

    let newScore = tempScore - penalty;
    let totalAnswered = questionsDone + 1;
    let totalMissed = penalty ? missed + 1 : missed;

    this.setState({
      totalScore: newScore,
      incorrect: totalMissed,
      questionAnswered: totalAnswered
    });

    if (totalAnswered === questionsTotal) {
      this.setState({
        completeQuiz: true
      });
    }
  };

  finishQuiz = () => {
    this.props.navigation.navigate('FinishRT', {
      score: this.state.totalScore,
      missed: this.state.incorrect,
      questions: this.state.numberOfQuestions
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.questionLoaded && (
          <FlatList
            data={this.state.questList}
            renderItem={({ item }) => (
              <Question
                question={item.question}
                answer1={item.answer1}
                answer2={item.answer2}
                answer3={item.answer3}
                answer4={item.answer4}
                correctAnswer={item.correctAnswer}
                scoreUpdate={this.updateScore}
              />
            )}
          />
        )}
        {!this.state.completeQuiz && (
          <TouchableHighlight style={styles.disabled}>
            <Text>Answer All the questions</Text>
          </TouchableHighlight>
        )}

        {this.state.completeQuiz && (
          <TouchableHighlight onPress={this.finishQuiz} style={styles.enabled}>
            <Text>Finished</Text>
          </TouchableHighlight>
        )}

        {!this.state.questionLoaded && <Text> LOADING </Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    disabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        height: '10%'
    },
    enabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#90ee90',
        height: '10%'
    }
})
