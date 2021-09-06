import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 
style,
type,
bold,
size,
color,



    }=props

    let font={
        bold:"Nunito-Bold",
        semiBold:"Nunito-SemiBold",
        regular:"Nunito",
        thin:"Nunito-Thin",
        light:"Nunito-Light",
        extraBold:"Nunito-ExtraBold",
        medium:"Nunito-Medium",
        italic:"Nunito-BoldItalic"
    }

  return(


      <ThemeProvider theme={theme}>
    <Text style={
        {...props.style,
        
           
            fontFamily:font[type],
            fontWeight:bold?"bold":"normal",
            color:theme.colors[color],
            fontSize:size,
           

        }
    }>
{props.children}
    </Text>
  </ThemeProvider>



  )
};




  

  CustomButton.defaultProps = {
style:{},
size:12,
color:"textPrimary",
type:"regular",
bold:false,
  }


export default CustomButton;
