import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import AlbumCategory from "../components/AlbumCategory";

import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategories } from "../src/graphql/queries";
import albumCategories from "../assets/dummyData/albumCategories";

export default function HomeScreen() {

const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategories));
        setCategories(data.data.listAlbumCategories.items)
      } catch (e) {
        console.log(e);
      }
    };

    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbumCategory albums={item.albums.items} title={item.title} />
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
