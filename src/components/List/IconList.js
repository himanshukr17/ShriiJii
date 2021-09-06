import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";

import { ListItem, Icon } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 
title, 
icon,
bottomDivider,
onPress
    }=props

  return(


      <ThemeProvider theme={theme}>

  <ListItem onPress={onPress} bottomDivider={bottomDivider} containerStyle={{backgroundColor:"white",borderBottomWidth:bottomDivider?1:0,borderColor:"#e2e2e2"}}>
        <Icon name={icon} style={styles.iconStyle} />
        <ListItem.Content>
          <ListItem.Title style={styles.titleStyle}>{title}</ListItem.Title>
        </ListItem.Content>
  
        <ListItem.Chevron style={styles.chevron} color={theme.colors.textPrimary} size={24} />
      </ListItem>
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    titleStyle:{
fontFamily:"NunitoMedium",

fontSize:14,
color:theme.colors.textPrimary,
 
     
    },

    iconStyle:{
        color:theme.colors.textPrimary,
        fontSize:24,
    }
,
    chevron:{
        color:theme.colors.textPrimary,
        fontSize:24,
    },

   
    
  
  });
  


CustomButton.defaultProps={
    onPress:null,

}

export default CustomButton;
