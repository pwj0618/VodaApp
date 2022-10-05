
import { Text, View, StyleSheet, ScrollView, Linking, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import style from "../constants/stylesheet";
import { useNavigation } from '@react-navigation/native';


export default function ChallengeCard({ route }) {
    const navigation = useNavigation();
    return (
        <View style={style.catalogCard.container}>
            <ScrollView>

                {route.params.title && <Text style={styles.title}>{route.params.title}</Text>}
                {route.params.img && <Image style={styles.img} source={route.params.img} />}
                {route.params.contents && <Text style={styles.content} >{route.params.contents}</Text>}

                <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
                    <Text style={styles.exit}>Exit To Home Page</Text>
                </TouchableOpacity>




            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({

    title: {
        fontSize: 26,
        fontFamily: "GothamLight",
        color: '#2DBBC6',
        margin: 20,
        alignSelf: "center"
    },
    content: {
        fontSize: 16,
        fontFamily: "GothamLight",
        paddingTop: 10,
        margin: 5
    },
    exit: {
        fontSize: 11,
        fontFamily: "GothamLight",
        color: '#2DBBC6',
        margin: 5
    },
    img: {
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#2DBBC6",
        margin: 10
    }
});
