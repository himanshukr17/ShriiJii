import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";

import { ListItem, Icon ,Avatar,Divider} from 'react-native-elements'
import { StyleSheet, Text, View,Image } from 'react-native';
import Badge from "../Misc/Badge"
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 
name, 
icon,
bottomDivider,
onPress,
subtitle,
avatar_url,
subtitle1,
subtitle2
    }=props

  return(


      <ThemeProvider theme={theme}>

  <ListItem onPress={onPress} containerStyle={{backgroundColor:"white",borderBottomWidth:bottomDivider?1:0,borderColor:"#e2e2e2"}}>
  <View style={{flexDirection:'column'}}>
  <Avatar border={6} source={{uri : 'https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg'}} size={170}>
  <Avatar.Accessory type="ionicon" name="heart" color="#a8a8a8" style={{backgroundColor:'white',marginTop:-100,top:105,right:5}} size={35}/>
  </Avatar>
  {/* <Image
          style={{resizeMode : 'contain',width:'300%',height:95,flex:1}}
          source={require('../../assets/images/apple.png')}
          /> */}
        <ListItem.Content style={{marginLeft:5}}>
          <ListItem.Title numberOfLines={2} style={styles.titleStyle}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitleStyle}>{subtitle}</ListItem.Subtitle>
          <View style={{flexDirection:'row'}}>
          <ListItem.Subtitle style={styles.subtitleStyle1}>{subtitle1}</ListItem.Subtitle>
          <ListItem.Subtitle style={styles.subtitleStyle2}>{subtitle2}</ListItem.Subtitle>
          </View>
        </ListItem.Content>
        {/* <Badge color={props.badgeColor} text={props.badgeText}/> */}
        
        {/* <ListItem.Chevron style={styles.chevron} color={theme.colors.textPrimary} size={24} /> */}
        </View>
      </ListItem>
       
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    titleStyle:{
fontFamily:"NunitoMedium",
width:155,
fontSize:14,
marginTop:5,
color:theme.colors.textPrimary,
 marginBottom:0,
 paddingBottom:0,
 lineHeight:18
     
    },
    subtitleStyle:{
        marginTop:5,
        paddingTop:0,
        lineHeight:14,
        color:theme.colors.textPrimary,
        fontFamily:"NunitoLight",
        fontSize:12
    },
    subtitleStyle1:{
        marginTop:15,
        paddingTop:0,
        lineHeight:18,
        color:theme.colors.textPrimary,
        fontFamily:"NunitoLight",
        fontSize:18,
        // textDecorationLine: 'line-through'
    },
    subtitleStyle2:{
        marginTop:15,
        paddingTop:0,
        lineHeight:18,
        color:theme.colors.textPrimary,
        fontFamily:"NunitoLight",
        fontSize:18,
        textDecorationLine: 'line-through'
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
