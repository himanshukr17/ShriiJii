import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 
style,
next,
type
    }=props

  return(


      <ThemeProvider theme={theme}>
    <Button
  
   containerStyle={style}
    buttonStyle={styles.buttonStyle}

    titleStyle={!next?styles.titleStyle:styles.titleStyleNext}
    disabledTitleStyle={styles.disabledTitleStyle}
    iconLeft
{...props}
   
  />
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    titleStyle:{
      fontFamily:"Nunito-Bold",
      fontSize:14,
      
paddingLeft:5,
paddingRight:5


     
    },

   
    disabledTitleStyle:{
      color:"white"
    }

    ,
    buttonStyle:{
        padding:8,
       paddingLeft:15,
       paddingRight:12,
        borderRadius:5,
       alignItems:"center",
    
    }
  });
  




export default CustomButton;
