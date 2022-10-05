import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { questions } from "../constants/quiz-questions";
import style from "../constants/stylesheet";

const answers = ["", "", "", "", "", ""];

export default function Quiz({ navigation }) {

  const [quizIndex, setQuizIndex] = useState(-1);

  const StartQuiz = () => (
    <View style={style.quiz.container}>
          <View style={style.quiz.textContainer}>
              <Text style={style.quiz.text}>
          {"Are you ready to start your self-care journey today?"}
        </Text>
      </View>
          <View style={style.quiz.buttonContainer}>
        <TouchableOpacity onPress={() => setQuizIndex(quizIndex + 1)}>
                  <Text style={style.quiz.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home Tab")}>
                  <Text style={style.quiz.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const QuizResults = ({ results }) => (
      <View style={style.quiz.container}>
          <View style={style.quiz.textContainer}>
              <Text style={style.quiz.buttonText}>{computeQuizResults(results)}</Text>
      </View>
      <View style={style.quiz.resultButtonContainer}>
        <TouchableOpacity onPress={() => setQuizIndex(-1)}>
                  <Text style={style.quiz.buttonText}>Start Over</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home Tab")}>
                  <Text style={style.quiz.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // compute the most common quiz response (i.e. mostly A, B, C)
  const computeQuizResults = results => {
    const maxValue = results
      .sort(
        (previous, current) =>
          results.filter(item => item === previous).length -
          results.filter(item => item === current).length
      )
      .pop();
    if (maxValue === 0) {
      return "Mostly A: Relax and Recharge. Comfort and solitude help you feel rejuvenated. Set aside time to focus on yourself, whether you enjoy yoga, forest bathing or retreating to water, finding time for you even in a steaming cup of tea or coffee will help you recharge. We recommend you try numbers 1, 3, 4, 11 to start you on your wellness journey.";
    } else if (maxValue === 1) {
      return "Mostly B: Get out and Explore You feel most free in nature. You would rather spend the day exploring a newtrail than relaxing indoors. Find a park, waterfall, beach or other natural areawhere you can enjoy the fresh air and soak up the sun. We recommend you try numbers 2,5, 14, 30 to start you on your wellness journey.";
    } else {
      return "Mostly C: Connect with others Personal connections and good conversation feed your soul. The relationship you nurture with family and friends gives you energy. Make time for coffee and a chat or set up a weekly lunch date to reconnect. We recommend you try numbers 13, 16, 23, 29 to start you on your wellness journey.";
    }
  };

  if (quizIndex == -1) {
    return <StartQuiz />;
  } else if (quizIndex >= 6) {
    return <QuizResults results={answers} />;
  } else {
    return (
        <View style={style.quiz.quizContainer}>
            <View style={style.quiz.quizContainer}>
                <Text style={style.quiz.text}>{questions[quizIndex].questionText}</Text>

          {questions[quizIndex].answerOptions.map((answer, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setQuizIndex(quizIndex + 1);
                answers[quizIndex] = answer.val;
              }}
            >
                  <Text style={style.quiz.buttonText}>{answer.answerText}</Text>
            </TouchableOpacity>
          ))}
        </View>
            <View style={style.quiz.quizContainer}>
          <TouchableOpacity onPress={() => setQuizIndex(quizIndex - 1)}>
                    <Text style={style.quiz.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home Tab")}>
                    <Text style={style.quiz.buttonText}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
