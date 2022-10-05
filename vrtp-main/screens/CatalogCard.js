import { Text, View, StyleSheet, ScrollView, Linking, Button, Image, Pressable } from 'react-native';
import style from "../constants/stylesheet";

export default function CatalogCard({ route }) {
  return (
    <View style={style.catalogCard.container}>
      <ScrollView>

        {route.params.title && <Text style={style.catalogCard.title}>{route.params.title}</Text>}
        {route.params.image && <Image source={{
          uri: `${route.params.image}`,
        }} style={style.catalogCard.image} />}

        {route.params.links &&
          <Pressable style={style.catalogCard.button} onPress={() => Linking.openURL(`https://${route.params.links}`)}>
            <Text style={style.catalogCard.buttonText}>Buy Our Product</Text>
          </Pressable>
        }
        {route.params.content && <Text style={style.catalogCard.content}>{route.params.content}</Text>}
      </ScrollView>
    </View>
  );
}
