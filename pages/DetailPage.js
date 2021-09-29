import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function DetailPage({ navigation, content }) {
  const [tip, setTip] = useState({
    idx: 9,
    category: "얼굴윤곽",
    title: "리프팅 시술",
    image:
      "https://lh3.googleusercontent.com/proxy/lwVWFj8sIQuCUWsAvqF5mkrMNiw9xhafZ2Sm0kpypBjEeddOd_Kzp4_FKvNzhSewntSKRV4_svkbkVID9auq_csk311m-Tejpd7VwivZ9KEteCe1xH5p",
    desc: "2020.09.09 1회 3000샷 얼굴  ",
    date: "2020.09.09",
  });
  useEffect(() => {
    navigation.setOptions({
     
      headerStyle: {
        backgroundColor: "#000",
        shadowColor: "#000",
      },
      headerTintColor: "#fff",
    });
    setTip(content);
  }, []);

  const popup = () => {
    Alert.alert("팝업!!");
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: tip.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.desc}>{tip.desc}</Text>
        <TouchableOpacity style={styles.button} onPress={() => popup()}>
          <Text style={styles.buttonText}>공유하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  image: {
    height: 400,
    margin: 10,
    marginTop: 40,
    borderRadius: 20,
    resizeMode: "contain",
  },
  textContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#eee",
  },
  desc: {
    marginTop: 10,
    color: "#eee",
  },
  button: {
    width: 100,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "deeppink",
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
