 
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
 

export default function App() {
  console.disableYellowBox = true;

  return  (
    <View style={styles.container}>
      <Image style={styles.image}/>
      <Text style={styles.title}>나만의 피부관리</Text>
      <Text style={styles.desc}></Text>
      <Text></Text>
      <TouchableOpacity style={styles.takePicture}>
        <Text style={styles.picText}>사진촬영</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.myRecord}>
        <Text style={styles.recordText}>나의 기록</Text>
      </TouchableOpacity>      
      <TouchableOpacity style={styles.board}>
        <Text style={styles.boardText}>게시판</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

});
