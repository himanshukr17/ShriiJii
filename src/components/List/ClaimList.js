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
subtitle,
date,
size,
price,
amount,
Quantity,
avatar_url
    }=props

  return(


      <ThemeProvider theme={theme}>

  <ListItem onPress={onPress} bottomDivider={bottomDivider} containerStyle={{backgroundColor:"white",borderBottomWidth:bottomDivider?1:0,borderColor:"#e2e2e2",padding:0.5,paddingBottom:15,paddingTop:15}}>
  <Avatar style={styles.banner} source={{uri: avatar_url}} border={5} />
      
        <ListItem.Content style={{marginLeft:0}}>
          <ListItem.Title numberOfLines={2} style={styles.titleStyle}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitleStyle}>{size}</ListItem.Subtitle>
          <View style={{flexDirection:'row'}}>
          {amount&&<ListItem.Subtitle style={styles.subtitleStyle}>Status: </ListItem.Subtitle>}
          {amount&&<ListItem.Subtitle style={styles.subtitleStyle1}>{amount}</ListItem.Subtitle>}</View>
          <View style={{flexDirection:'row'}}>
          {Quantity&&<ListItem.Subtitle style={styles.subtitleStyle}>Quantity: </ListItem.Subtitle>}
          {Quantity&&<ListItem.Subtitle style={styles.subtitleStyle}>{Quantity}</ListItem.Subtitle>}</View>
          <View style={{flexDirection:'row'}}>
          {price&&<ListItem.Subtitle style={styles.subtitleStyle2}>Rs. </ListItem.Subtitle>}
          {price&&<ListItem.Subtitle style={styles.subtitleStyle2}>{price}</ListItem.Subtitle>}</View>
        </ListItem.Content>
        {/* <Badge color={props.badgeColor} text={props.badgeText}/> */}
        
        {amount&&<ListItem.Chevron style={styles.chevron} color={theme.colors.textPrimary} size={24} />}
        
      </ListItem>
       
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    titleStyle:{
fontFamily:"Nunito-Bold",
// marginTop:-10,
fontSize:12,
color:theme.colors.textPrimary,
 marginBottom:0,
 paddingBottom:0,
 lineHeight:13
     
    },
    subtitleStyle:{
        marginTop:5,
        paddingTop:0,
        lineHeight:14,
        fontFamily:"NunitoLight",
        fontSize:12,
        // color:'green'
    },
    subtitleStyle1:{
        marginTop:5,
        paddingTop:0,
        lineHeight:14,
        fontFamily:"NunitoLight",
        fontSize:12,
        color:'green'
    },
    subtitleStyle2:{
        marginTop:5,
        paddingTop:0,
        lineHeight:15,
        fontFamily:"Nunito-ExtraBold",
        fontSize:13,
        color:'black'
        // color:'green'
    },

    avatarStyle:{
        color:theme.colors.textPrimary,
        fontSize:24,
    }
,


banner:{
width:100,
height:80,
borderRadius:10,
backgroundColor:"#e2e2e2"
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
