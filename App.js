 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";


export default function App() {
    console.disableYellowBox = true;

  return ( <NavigationContainer>
   
    <StackNavigator/>
 </NavigationContainer>);
}

const styles = StyleSheet.create({
  
});
