import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import {Icon} from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 

        padding,
        borderRadius,
        iconType,
        iconSize,
        iconColor,
        backgroundColor,
        size,
        iconName,
        style,
        borderColor,
        borderWidth,
        text,
        fontSize,

    }=props

  return(


      <ThemeProvider theme={theme}>
    
    <Button
    containerStyle={style}
    icon={
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        type={iconType}
      />
    }
    
    buttonStyle={{padding:padding,borderRadius:8,backgroundColor:backgroundColor,borderWidth:borderWidth,borderColor:borderColor}}
  
{...props}
   
  />
  {text&&<Text style={{fontSize:fontSize,fontFamily:"NunitoSemiBold",color:theme.colors.textSecondary,marginTop:8}}>{text}</Text>}
  
  </ThemeProvider>



  )
};


CustomButton.defaultProps={
    padding:8,
    borderRadius:1,
    iconType:"feather",
    iconSize:24,
    iconName:"plus",
    iconColor:"white",
    borderWidth:0,
    borderColor:"#000",
    text:null,
    fontSize:12,

    backgroundColor:theme.colors.primary
   

}
  




export default CustomButton;
