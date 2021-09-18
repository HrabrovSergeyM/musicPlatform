import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import AlbumCategory from "../components/AlbumCategory";

import { RootTabScreenProps } from "../types";
import albumCategories from "../assets/dummyData/albumCategories";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={albumCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbumCategory albums={item.albums} title={item.title} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
