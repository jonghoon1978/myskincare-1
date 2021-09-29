import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>나만의 피부관리</Text>
      <Image
        style={styles.loadingImg}
        source={{
          uri: "https://t1.daumcdn.net/cfile/tistory/251B263556CF105B16",
        }}
      />
      <Text style={styles.title}>피부관리 효과를 기록하세요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#add8e6`,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  loadingImg: {
    margin: 20,
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 30,
    fontWeight: "700",
    color: `#ff69b4`,
    marginBottom: 30,
  },
});
