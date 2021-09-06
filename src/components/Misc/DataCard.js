import React from 'react'

import { Button, ThemeProvider } from "react-native-elements";


import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
export default function Card(props) {
    return (
        <ThemeProvider theme={theme}>
          
<View style={styles.card}>
<Typography color={"green"} size={18} type={"bold"}>
    {props.value}
</Typography>
<Typography color={"textPrimary"} size={14} style={{marginTop:4}} type={"bold"}>
   {props.title}
</Typography>
</View>
          
            </ThemeProvider >
    )
}

const styles = StyleSheet.create({

    card:{
       flex:1,
       maxWidth:150,
       aspectRatio:1.7,
       justifyContent:"center",
       alignItems: "center",
       borderRadius:10,
       backgroundColor:"#E0E0E0"
    },
    
})
