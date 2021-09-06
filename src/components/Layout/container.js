import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import {theme } from "../../config/theme"
const Container = (props) => {

 

   

  return(

<View style={styles.container}>
{props.children}

</View>
      



  )
};



const styles = StyleSheet.create({
container: {
    flex:1,
    flexDirection:'column',
    marginTop:StatusBar.currentHeight,

}
})
  


export default Container;
