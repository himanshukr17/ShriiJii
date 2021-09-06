import React, { memo } from 'react';
import {ThemeProvider} from "react-native-elements"
import Button from "../components/CustomButtons/Button"
import Background from "../components/Background"
import {Text,View,  StyleSheet,} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
 import TypoGraphy from '../components/Typography/Typography'
const HomeScreen = ({ navigation }) => (
  <Background>
    <View style={styles.container}></View>
    <LinearGradient colors={['rgba(0,0,0,0)', "rgba(0,0,0,1)"]} style={styles.innnerContainer}>

    <Text style={styles.textTitle}>Welcome</Text>

      <Text style={styles.textTitle}>to your store</Text>

      <TypoGraphy color={"white"} style={styles.thin} size={12} type={"light"} >Sell , Manage , Engage </TypoGraphy>
      <Button title="Get Started" onPress={()=>navigation.navigate("LoginScreen")}/>
      </LinearGradient>
      </Background>
    
   
);

const styles = StyleSheet.create({
 container: {
   flex:1,
   justifyContent: 'center',
 },

 innnerContainer: {
  flex:1,
  justifyContent: 'center',
  alignItems:"center",
  padding:12
 },

 textTitle:{
   color:"#fff",
   fontSize:40,
   textAlign:"center",
   fontFamily:"Nunito-Regular",
  
   lineHeight:45
 },
 thin:{
   marginBottom:20,
   marginTop:8
 }
});

export default memo(HomeScreen);
