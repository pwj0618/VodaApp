import { Text, View, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Linking } from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function Item({ content, title, links, image }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Card Details", { content: content.desc, title: title, links: links, image: image })
    }}>
      <View style={styles.item}>
        <ScrollView >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content.short_desc}</Text>
          <Text style={styles.links} onPress={() => Linking.openURL(`https://${links}`)}>links</Text>
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    marginTop: StatusBar.currentHeight,
  },
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
});
