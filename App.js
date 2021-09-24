import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from "./pages/MainPage";


export default function App() {
    console.disableYellowBox = true;

  return (
     <MainPage/>
  );
}

const styles = StyleSheet.create({
  
});
