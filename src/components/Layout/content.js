import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {theme } from "../../config/theme"
const Content = (props) => {

 

   
if(props.fixed)
{return(
  <View style={[styles.contentFixed,props.style]}>
{props.children}

</View>
)
}
else
{  return(


<ScrollView contentContainerStyle={[styles.content,,props.style]}>
{props.children}

</ScrollView>
)}
};



const styles = StyleSheet.create({
content: {
    flexGrow:1,
   padding:24,
   paddingTop:0,
   backgroundColor:"white",
    flexDirection:'column'
},
contentFixed:{
  flexGrow:1,
  padding:24,
  backgroundColor:"white",
  paddingTop:0,
 
   flexDirection:'column'
}
})
  


export default Content;
