import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";

import { ListItem, Icon ,Avatar} from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 
name, 
icon,
bottomDivider,
onPress,
subtitle,
avatar_url
    }=props

  return(


      <ThemeProvider theme={theme}>

  <ListItem onPress={onPress} bottomDivider={bottomDivider} containerStyle={{backgroundColor:"#F6F6F9",borderBottomWidth:bottomDivider?1:0,borderColor:"#e2e2e2"}}>
  <Avatar rounded source={{uri: avatar_url}} size={50}/>
        <ListItem.Content style={{marginLeft:0}}>
          <ListItem.Title style={styles.titleStyle}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitleStyle}>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon name={icon} style={styles.iconStyle} />
      </ListItem>
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    titleStyle:{
fontFamily:"NunitoMedium",

fontSize:16,
fontWeight:"bold",
color:theme.colors.textPrimary,
 marginBottom:0,
 paddingBottom:0,
 lineHeight:24
     
    },
    subtitleStyle:{
        marginTop:0,
        paddingTop:0,
        lineHeight:14,
        fontFamily:"NunitoLight",
        fontSize:12
    },

    avatarStyle:{
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
