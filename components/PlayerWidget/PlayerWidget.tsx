import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Song } from "../../types";
import styles from "./styles";

const song = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progress} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={"white"}/>
            <TouchableOpacity >
              <FontAwesome name={ 'pause' } size={30} color={"white"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
};

export default PlayerWidget;
