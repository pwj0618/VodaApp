import { Text, View, StyleSheet, ScrollView, StatusBar, SafeAreaView, ImageBackground, Pressable, Linking } from 'react-native';
import React from "react";
import Notification from './notification';
import style from "../constants/stylesheet";

const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Notification />
                  <View style={[style.home.headerText, style.home.headerContainer]}>
                      <Text style={style.home.headerText}>{"YOU'RE healing from something…\n"}</Text>
                      <Text style={style.home.headerText}>{"Heartbreak, grief, burnout, injury, loss.\n"}</Text>
                      <Text style={style.home.headerText}>{"And it's not just you, it's all around us.\n"}</Text>
                      <Text style={style.home.headerText}>{"EVERYone is dealing with some form of hardship and it's time to start healing.\n"}</Text>
                      <Text style={style.home.headerText}>{"Voda can help!"}</Text>
          </View>
                  <View style={[style.home.shopContainer, style.home.row]}>
                      <ImageBackground style={style.home.image} source={require("../assets/web-42.jpg")}>
                          <Text style={style.home.text}>Shop the Love and Connection Collection</Text>
                          <Pressable style={style.home.button} onPress={() => Linking.openURL(`https://www.vodaretreats.com/the-love-and-connection-collection`)}>
                              <Text style={style.home.buttonText}>Shop Now</Text>
              </Pressable>
            </ImageBackground>
          </View>
          <View style={[style.home.challengeContainer]}>
            <ImageBackground style={style.home.image} source={require("../assets/self-care-background.jpg")}>
              <Pressable style={style.home.selfCareButton} onPress={() => navigation.navigate("Challenge Screen")}>
                <Text style={style.home.buttonText}>Start Your Challenge!</Text>
              </Pressable>
            </ImageBackground>
          </View>
                  <View style={[style.home.row]}>
                      <ImageBackground style={style.home.image} source={require("../assets/blog-background.jpg")}>
                          <Text style={style.home.text}>Blog</Text>
                          <Pressable style={style.home.button} onPress={() => Linking.openURL(`https://www.vodaretreats.com/blog`)}>
                              <Text style={style.home.buttonText}>Learn More</Text>
              </Pressable>
            </ImageBackground>
          </View>
          <View style={[style.home.row]}>
                      <ImageBackground style={style.home.image} source={require("../assets/lake-background.jpg")}>
                          <Text style={style.home.text}>About</Text>
                          <Pressable style={style.home.button} onPress={() => Linking.openURL(`https://www.vodaretreats.com/about`)}>
                              <Text style={style.home.buttonText}>Learn More</Text>
              </Pressable>
            </ImageBackground>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: style.home.container.flex,
    marginTop: StatusBar.currentHeight,
  }
});


export default Home