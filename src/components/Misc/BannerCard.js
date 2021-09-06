import React from 'react'

import { Button, ThemeProvider } from "react-native-elements";

import Icon from "react-native-vector-icons/Entypo";
import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
export default function BannerCard() {
    return (
        <ThemeProvider theme={theme}>
            <LinearGradient colors={['#2F80ED',  '#2D9CDB']}  style={styles.main}>
<Typography size={14} color={"white"} style={styles.TotalSales}> Total sales today</Typography>
<Typography size={32} color={"white"} style={styles.Total} type={"semiBold"}> ₹ 25,000</Typography>
            </LinearGradient>
            </ThemeProvider >
    )
}

const styles = StyleSheet.create({

    main:{
        aspectRatio:2.4,

      borderTopLeftRadius:20,
      borderTopRightRadius:20,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
        flex:1
    },
    TotalSales:{
        marginTop:24,
        marginLeft:24
    },
    Total:{
        marginLeft:20,
        marginTop:8
    }
})
