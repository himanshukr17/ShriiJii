import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const Container = (props) => {

 

   

  return(

<View style={props.actionButton?styles.container:styles.normal}>
{props.children}

</View>
      



  )
};



const styles = StyleSheet.create({
container: {
paddingLeft:20,
paddingBottom:10,
paddingRight:20,
backgroundColor:"white",
},
normal:{
  backgroundColor:"white",
}
})
  


export default Container;
