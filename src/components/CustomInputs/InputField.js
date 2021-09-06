import React from "react";
import { Input ,ThemeProvider} from "react-native-elements";

import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomInput= (props) => {

    let { 
style,
next

    }=props

  return(


      <ThemeProvider theme={theme}>
    <Input

   inputContainerStyle={styles.inputContainerStyle}
   labelStyle={styles.labelStyle}
leftIconContainerStyle={styles.iconContainer}
rightIconContainerStyle={styles.iconContainer}
   inputStyle={styles.inputStyle}
   {...props}
  />
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
inputContainerStyle:{
    fontFamily:"Nunito",
    fontSize:18,
    color:theme.colors.Primary,
    borderWidth:0.5,
width:"100%",
marginRight:0,
paddingRight:0,
marginBottom:10,
    fontWeight:"normal",
    borderBottomColor:theme.colors.borderColor
},
inputStyle:{
    fontFamily:"Nunito-Regular",
    fontSize:14,
    fontWeight:"normal",
  

    color:theme.colors.textPrimary,
},

iconContainer:{
paddingRight:10
},

labelStyle:{
    fontFamily:"Nunito-Bold",
    fontSize:14,
    fontWeight:"normal",
    marginLeft:0,
   lineHeight:18,
    color:theme.colors.textPrimary
}
    ,
   
   

  });
  




export default CustomInput;
