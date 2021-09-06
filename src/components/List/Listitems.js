import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";

import { ListItem, Icon ,Avatar,Divider} from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';
import Badge from "../Misc/Badge"
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 
name, 
icon,
bottomDivider,
onPress,


    }=props

  return(


      <ThemeProvider theme={theme}>

  <ListItem onPress={onPress} bottomDivider={bottomDivider} containerStyle={{elevation:1,padding:5,paddingBottom:15,paddingLeft:16,paddingRight:16,paddingTop:15,backgroundColor:"#FFFFFF",borderRadius:4,marginTop:16}}>
<Icon name={icon}/>
        <ListItem.Content style={{marginLeft:0}}>
          <ListItem.Title style={styles.titleStyle}>{name}</ListItem.Title>
        </ListItem.Content>
        
        <ListItem.Chevron style={styles.chevron} color={theme.colors.textPrimary} size={24} />
        
      </ListItem>
       
  </ThemeProvider>

  )
};



const styles = StyleSheet.create({
    titleStyle:{
fontFamily:"Nunito-Bold",

fontSize:17,
color:theme.colors.textPrimary,
 marginBottom:0,
 paddingBottom:0,
 lineHeight:24
     
    },

    chevron:{
        color:theme.colors.textPrimary,
        fontSize:24,
    },

  });

CustomButton.defaultProps={
    onPress:null,
    
}

export default CustomButton;
