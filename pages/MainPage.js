 
import { StyleSheet, Text, View, Image, TouchableOpacity,} from "react-native";
import imageMain from "../assets/imageMain.png"; 
import camera from "../assets/camera.png";  
import track from "../assets/track.png";  
import folder from "../assets/folder.png";  
import data from "../data.json";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

 

  
export default function MainPage({ navigation, route }) {
  console.disableYellowBox = true;

    const [state, setState] = useState([]);
  const [ready, setReady] = useState(true);
   const [cateState, setCateState] = useState([]);

   useEffect(() => {
     setTimeout(() => {
       let tip = data.tip;
       setState(data);
       setCateState(tip);
       setReady(false);
     }, 1000);
   }, []);

   const category = (cate) => {
     if (cate == "전체보기") {
 
       setCateState(state);
     } else {
       setCateState(
         state.filter((d) => {
           return d.category == cate;
         })
       );
     }
   };

  return ready ? (
    <Loading />
  ) : (
    // navigation.setOptions({
    //   title: "",
    // });
    <View style={styles.container}>
      <Text style={styles.title}>나만의 피부관리</Text>
      <Image style={styles.imageMain} source={imageMain} />
      <Text style={styles.desc}>
        기능성 화장품과 미용기기를 사용하여 피부관리의 효과를 극대화하고
        변화과정을 기록하세요
      </Text>
      <View style={styles.iconsWrap}>
        <TouchableOpacity
          style={styles.myRecord}
          onPress={() => {
            navigation.navigate("DetailPage");
          }}
        >
          <Image style={styles.icons} source={folder} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraBox}
          onPress={() => {
            navigation.navigate("CameraPage");
          }}
        >
          
          <Image style={styles.icons} source={camera} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.board}
          onPress={() => {
            navigation.navigate("MyRecord");
          }}
        >
          <Image style={styles.icons} source={track} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logIn}>
        <Text style={styles.logInText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUp}>
        <Text style={styles.signUpText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};
 

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  imageMain: {
    width: 350,
    height: 300,
    borderRadius: 15,
    resizeMode: "contain",
  },
  title: {
 
    fontSize: 25,
    fontWeight: "bold",
    color: `#fff8dc`,
    width: "100%",
    height: 50,
    backgroundColor: `#00ced1`,
    borderRadius: 15,
    textAlign: "center",
    padding: 5,
  },
  desc: {
    fontSize: 16,
    fontWeight: "bold",
    color: `#00ced1`,
    padding: 10,
    textAlign: "center",
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
    margin: 10,
  },
  logIn: {
    width: 80,
    height: 30,
    backgroundColor: `#fff8dc`,
    borderRadius: 10,
    padding: 4,
  },
  logInText: {
    fontSize: 15,
    textAlign: "center",
  },
  signUp: {
    marginTop: 5,
    width: 80,
    height: 30,
    backgroundColor: `#fff8dc`,
    borderRadius: 10,
    padding: 4,
  },
  signUpText: {
    fontSize: 15,
    textAlign: "center",
  },
  
});
