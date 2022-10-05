import { Text, View, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import style from "../constants/stylesheet";

export default function SingleChallengeCard({ number, title, contents, img }) {
  const navigation = useNavigation();
  const [content, setContent] = useState(number);

  const setTitle = () => {
    content == title ? navigation.navigate("Challenge Details", { number: number, contents: contents, title: title, img: img }) : setContent(title);
    //navigation.navigate("Card Details", { content: content.desc, title: title, links: links, image: image })
  }

  return (
    <TouchableOpacity style={styles.gridbox} onPress={setTitle}>
      <Text style={styles.gridText}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "GothamLight",
    color: '#2DBBC6'
  },
  content: {
    fontSize: 12,
    fontFamily: "GothamLight",
    paddingTop: 10
  },
  links: {
    fontSize: 12,
    fontFamily: "GothamLight",
    color: '#2DBBC6'
  },
  item: {
    backgroundColor: '#fff',
    height: 200,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 20,
  },
  container: {
    flex: 3,
    backgroundColor: 'white'
  },

  gridbox: {
    flex: 1,
    height: 75,
    margin: 2,
    backgroundColor: '#779FA4',
    opacity: 0.51,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gridText: {
    fontSize: 16,
    color: '#F8F8F8',
    margin: 5,
  }
});
