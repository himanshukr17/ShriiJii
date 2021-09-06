import React from "react";
import { Input ,ThemeProvider} from "react-native-elements";
import NumericInput from 'react-native-numeric-input'
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"

const NumberInput= (props) => {

 
  return(


      <ThemeProvider theme={theme}>
   <NumericInput containerStyle={{borderWidth:0}} inputStyle={styles.inputStyle} {...props}/>
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({

   inputStyle: {
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderTopColor:"#e2e2e2",
    borderLeftColor:"#e2e2e2",
    borderRightColor:"#e2e2e2",
    borderBottomColor:"#e2e2e2",
    borderRadius:15,
    color:theme.colors.textPrimary,
    fontWeight:"bold"
   }

  });
  




export default NumberInput;
