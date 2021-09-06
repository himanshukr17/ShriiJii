import React from "react";
import { Input ,ThemeProvider} from "react-native-elements";
import { SearchBar,Header } from 'react-native-elements';

import { StyleSheet, Text, View } from 'react-native';
import Typography from "../../components/Typography/Typography";
import {theme } from "../../config/theme"
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const CustomHeader= (props) => {

  const navigation = useNavigation();

  let { 
    left
        }=props

  return(


      <ThemeProvider theme={theme}>
        <View style={{backgroundColor:"white"}}>
    <Header
leftComponent={left&&<Icon  onPress={() => {
  navigation.goBack();
}}
name="chevron-left" size={30} style={{marginLeft:10}}/>}
statusBarProps={{
    backgroundColor:"white",
    barStyle:"dark-content",
    hidden:false
   

}}
 containerStyle={{
  backgroundColor:"white",
     borderBottomWidth:0,
   justifyContent:"center",
alignItems:"center",
paddingTop:0,
height:60,
...props.style

 }}
 {...props}
  />
{props.title&&   <Typography
          size={24}
          style={{paddingLeft: 34,marginTop:0,paddingTop:0}}
          type={'bold'}
          color={'textPrimary'}>
         {props.title}
        </Typography>}
        </View>
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
    containerStyle:{
width:"100%",
backgroundColor:"white",
padding:12,
borderTopWidth:0,
borderBottomWidth:0

    },
inputContainerStyle:{
    borderColor:"red",
    borderRadius:15,
  padding:2,
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
  




export default CustomHeader;
