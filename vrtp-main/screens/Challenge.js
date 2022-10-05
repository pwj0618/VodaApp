import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Button,
    Pressable,
    TouchableOpacity,
    Linking,
    FlatList
} from "react-native";
import React, { useState } from "react";
import treatment from "../constants/cards-en";
import style from "../constants/stylesheet";
import selfcare from "../constants/challenge";
import SingleChallengeCard from "../components/SingleChallengeCard";


const DATA = selfcare;

const GridView = ({ data }) => (
    <View style={styleSheet.gridbox}>
        <Text style={styleSheet.gridText} onPress={() => { getOnPressItem(data) }}>{data}</Text>
    </View>
);


export default function Challenge({ navigation }) {
    return (

        <SafeAreaView style={styleSheet.MainContainer}>
            <View style={[style.challenge.headerContainer]}>
                <Text style={style.challenge.text}>{"Tap your current day to reveal your challenge\n\nTap again to start!"}</Text>
            </View>

            <FlatList
                data={DATA}
                renderItem={({ item }) => <SingleChallengeCard number={item.id + 1} title={item.name} contents={item.text} img={item.img} />}
                keyExtractor={item => item.id}
                numColumns={3}
                key={item => item.id}

            />



        </SafeAreaView>
    );
}


const styleSheet = StyleSheet.create({

    MainContainer: {
        flex: 3,
        backgroundColor: 'white'
    },

    gridbox: {
        flex: 1,
        height: 75,
        margin: 2,
        backgroundColor: '#00BFA5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    gridText: {
        fontSize: 24,
        color: 'white'
    }

});
