import React from "react";
import { Input ,ThemeProvider} from "react-native-elements";
import { SearchBar } from 'react-native-elements';

import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomInput= (props) => {

    let { 
style,
next,
place

    }=props

  return(


      <ThemeProvider theme={theme}>
    <SearchBar
    lightTheme={true}
containerStyle={styles.containerStyle}
placeholder={place&&place}

inputStyle={styles.inputStyle}
  inputContainerStyle={styles.inputContainerStyle}
   {...props}
  />
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    containerStyle:{
width:"100%",
// backgroundColor:"rgba(0,0,0,0)",

padding:0,
borderRadius:20,


    },
inputContainerStyle:{

  borderWidth: 0.5 ,
// borderColor:"#828282",
    borderRadius:20,
  padding:2,
  borderBottomWidth:0.5,
 
    backgroundColor:"white"
},
inputStyle:{
    fontFamily:"Nunito",
    marginLeft:5,
    fontSize:16,
    fontWeight:"normal",
    color:theme.colors.textPrimary,
},


   

  });
  




export default CustomInput;
