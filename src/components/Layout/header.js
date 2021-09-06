import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const Container = (props) => {

 

   

  return(

<View style={styles.header}>
{props.children}

</View>
      



  )
};



const styles = StyleSheet.create({
    header: {
  backgroundColor:"white",
  elevation:20
}
})
  


export default Container;
