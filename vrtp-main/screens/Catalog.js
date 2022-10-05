
import { Text, View, SafeAreaView, VirtualizedList, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import treatment from '../constants/cards-en';
import React from "react";
import Item from '../components/SingleCatalogCard'
import style from "../constants/stylesheet";

const DATA = [];
const tc = treatment;

const getItem = (data, index) => ({
  id: index,
  title: tc[index].title,
  content: tc[index],
  links: tc[index].links,
  image: tc[index].image,
});

const getItemCount = (data) => 8;

export default function Catalog({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} content={item.content} links={item.links} image={item.image} />}
        getItemCount={getItemCount}
        getItem={getItem}
      ></VirtualizedList>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
    container: {
        flex: style.catalog.container.flex,
        marginTop: StatusBar.currentHeight,

    }
});

