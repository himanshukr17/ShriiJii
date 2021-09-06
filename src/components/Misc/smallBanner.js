import React from 'react'

import { Button, ThemeProvider } from "react-native-elements";

import Icon from "react-native-vector-icons/Entypo";
import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
export default function BannerCard(props) {
      let { 
name, 

onPress,
subtitle,
align,

    }=props
    return (
        <ThemeProvider theme={theme}>
            <LinearGradient colors={['#E2E2E2','#E2E2E2']}  style={styles.main}>
<Typography size={21} color={"green"} style={styles.Text1} type={"semiBold"}>{name}</Typography>
<Typography size={13} color={"black"} style={styles.Text2}>{subtitle}</Typography>
            </LinearGradient>
            </ThemeProvider >
    )
}

const styles = StyleSheet.create({

    main:{
 
 height:100,
 width:150,
 borderTopLeftRadius:20,
borderTopRightRadius:20,
borderBottomLeftRadius:20,
borderBottomRightRadius:20,
flex:0
    },
    Text1:{
        marginTop:22,
      
        textAlign:'center'
    },
    Text2:{
       
      
        textAlign:'center'
    },
   
})
