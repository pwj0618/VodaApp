import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Catalog from "./screens/Catalog";
import CatalogCard from './screens/CatalogCard'
import Challenge from "./screens/Challenge";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import ChallengeCard from "./screens/ChallengeCard";

const fetchFonts = async () => {
  return await Font.loadAsync({
    GothamLight: require("./assets/fonts/gothamlight.otf")
  });
};

const HomeStack = createNativeStackNavigator();
const QuizStack = createNativeStackNavigator();
const CatalogStack = createNativeStackNavigator();
const ChallengeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Screen" component={Home} options={{
        title: 'VODA',
        headerTitleStyle: {

          color: "white",
          fontSize: 30,
          letterSpacing: 0,
          fontWeight: "200",
          marginVertical: 10,
        },
        headerStyle: {
          backgroundColor: '#87CEEB',
          // use your preferred color code
        }

      }} />
      <ChallengeStack.Screen name="Challenge Screen" component={Challenge} options={{
        title: 'VODA',
        headerTitleStyle: {

          color: "white",
          fontSize: 30,
          letterSpacing: 0,
          fontWeight: "200",
          marginVertical: 10,
        },
        headerStyle: {
          backgroundColor: '#87CEEB',
          // use your preferred color code
        }

      }} >

      </ChallengeStack.Screen>
      <ChallengeStack.Screen name="Challenge Details" component={ChallengeCard} options={{
        title: 'VODA',
        headerTitleStyle: {

          color: "white",
          fontSize: 30,
          letterSpacing: 0,
          fontWeight: "200",
          marginVertical: 10,
        },
        headerStyle: {
          backgroundColor: '#87CEEB',
          // use your preferred color code
        }

      }} >

      </ChallengeStack.Screen>
    </HomeStack.Navigator>
  );
}


const QuizStackScreen = () => {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="Quiz Screen" component={Quiz} />
    </QuizStack.Navigator>
  );
}

const CatalogStackScreen = () => {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen name="Catalog" component={Catalog} options={{
        title: 'VODA',
        headerTitleStyle: {

          color: "white",
          fontSize: 30,
          letterSpacing: 0,
          fontWeight: "200",
          marginVertical: 10,
        },
        headerStyle: {
          backgroundColor: '#87CEEB',
          // use your preferred color code
        }

      }} />
      <CatalogStack.Screen name="Card Details" component={CatalogCard} options={{
        title: 'VODA',
        headerTitleStyle: {

          color: "white",
          fontSize: 30,
          letterSpacing: 0,
          fontWeight: "200",
          marginVertical: 10,
        },
        headerStyle: {
          backgroundColor: '#87CEEB',
          // use your preferred color code
        }

      }} />
    </CatalogStack.Navigator>
  )
}


export default function App() {

  const [loaded] = useFonts({
    GothamLight: require('./assets/fonts/gothamlight.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home Tab") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Quiz Tab") {
              iconName = focused ? 'create' : 'create-outline';

            } else if (rn === "Catalog Tab") {
              iconName = focused ? 'book' : 'book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false
        })}>

        <Tab.Screen name={'Home Tab'} component={HomeStackScreen} />
        <Tab.Screen name={'Quiz Tab'} component={QuizStackScreen} />
        <Tab.Screen name={'Catalog Tab'} component={CatalogStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>

  );

}
