import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import camera from "../assets/camera.png";
import repeat from "../assets/repeat.png";
import addlist from "../assets/addlist.png"; 

export default function CameraPage() {
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <Text style={styles.cameraText}>사진촬영</Text>
      </View>
      <View style={styles.iconsWrap}>
        <TouchableOpacity style={styles.myRecord}>
          <Image style={styles.icons} source={addlist} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.camera}>
          <Image style={styles.icons} source={camera} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.board}>
          <Image style={styles.icons} source={repeat} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
  },
  cameraBox:{
    width:"100%",
    height:500,
    borderColor:"black",
    borderWidth:2,
  },
  icons: {
    width: 60,
    height: 60,  
    color: `#fff8dc`,
    margin: 20,
    marginTop: 10,
  },
  iconsWrap: {
    flexDirection: "row",
    margin:30,
  },
});
