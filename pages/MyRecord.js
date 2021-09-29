import React  from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import data from "../data.json";
import Card from "../components/Card";

export default function MyRecord({navigation, rout}) {
  let tip = data.tip;
  return (
    <>
      <ScrollView
        style={styles.topContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity
          style={styles.topButtonAll}
          onPress={() => {
            category("전체보기");
          }}
        >
          <Text style={styles.topButtonTextAll}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton01}
          onPress={() => {
            category("스킨 타이트닝");
          }}
        >
          <Text style={styles.topButtonText}>스킨 타이트닝</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton02}
          onPress={() => {
            category("상처/여드름 치료");
          }}
        >
          <Text style={styles.topButtonText}>상처/여드름 치료</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton03}
          onPress={() => {
            category("얼굴 윤곽술");
          }}
        >
          <Text style={styles.topButtonText}>얼굴 윤곽술</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topButton04}
          onPress={() => {
            category("색소침착");
          }}
        >
          <Text style={styles.topButtonText}>색소침착</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton05}
          onPress={() => {
            category("바디체형관리");
          }}
        >
          <Text style={styles.topButtonText}>바디체형관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton06}
          onPress={() => {
            category("지방제거");
          }}
        >
          <Text style={styles.topButtonText}>지방제거</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView
        style={styles.cardContainer}
        onPress={() => {
          navigation.navigate("DetailPage", content);
        }}
      >
        {/* 하나의 카드 영역을 나타내는 View */}
        {tip.map((content, i) => {
          return <Card content={content} key={i} />;
        })}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  topContainer: {
    marginTop: 30,
    marginLeft: 10,
    height: 60,
  },
  topButtonAll: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#20b2aa",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  topButton01: {
    width: 100,
    height: 50,
    padding: 9,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  topButton02: {
    width: 100,
    height: 50,
    padding: 9,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    margin: 7,
  },
  topButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9adbc5",
    borderRadius: 15,
    margin: 7,
  },
  topButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#f886a8",
    borderRadius: 15,
    margin: 7,
  },
  topButtonText: {
    color: "#fff",
    fontWeight: "700",
    //텍스트의 현재 위치에서의 정렬
    textAlign: "center",
  },
  topButtonTextAll: {
    color: "#fff",
    fontWeight: "700",
    //텍스트의 현재 위치에서의 정렬
    textAlign: "center",
  },

  cardContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  card: {
    flex: 1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
});
