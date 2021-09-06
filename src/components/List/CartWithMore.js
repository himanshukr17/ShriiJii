import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";

import { ListItem, Icon ,Avatar,Badge} from 'react-native-elements'
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

  <ListItem onPress={onPress} bottomDivider={bottomDivider} containerStyle={{backgroundColor:"white",borderBottomWidth:bottomDivider?1:0,borderColor:"#e2e2e2"}}>
  <View>
  <Icon name={"shopping-cart"} type="feather"  style={styles.iconStyle} size={28} />
  <Badge status="warning" value={"1"}   containerStyle={{ position: 'absolute', top: -4, right: -8 }} textStyle={styles.textStyle} />
  </View>
        <ListItem.Content style={{marginLeft:5}}>
          <ListItem.Title style={styles.titleStyle}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitleStyle}>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
     <Badge status="primary" value={"Current"} badgeStyle={styles.badgeContainer} textStyle={styles.textStyle}/ >
        <ListItem.Chevron style={styles.chevron} type="feather" name="more-vertical" color={theme.colors.textPrimary} size={24} />
      </ListItem>
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    titleStyle:{
fontFamily:"NunitoMedium",

fontSize:14,
color:theme.colors.textPrimary,
 marginBottom:0,
 paddingBottom:0,
 lineHeight:24,
     
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

    badgeContainer:{
        padding:12,
      paddingLeft:5,
      paddingRight:5
    }
    ,
    textStyle:{
        fontFamily:"NunitoMedium",
        fontSize:10,
        lineHeight:13
    },
    iconStyle:{
        color:theme.colors.textPrimary,
        fontSize:28,
    }
    
  
  });
  


CustomButton.defaultProps={
    onPress:null,
    
}

export default CustomButton;
