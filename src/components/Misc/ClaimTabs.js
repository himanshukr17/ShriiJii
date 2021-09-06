import React from 'react'

import { Button, ThemeProvider } from "react-native-elements";


import Typography from "../Typography/Typography";
import IconButton from "../CustomButtons/IconButton";
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { theme } from "../../config/theme";
const  BannerCard=(props)=> {
    return (
        <ThemeProvider theme={theme}>
          
<View style={styles.selector}>

    <View style={{flexDirection:"row",alignItems: "center"}}>
<Icon
type={props.iconType}

size={30}
name={props.iconName}

/>


<Typography style={{marginLeft:10}}  type={"bold"} color={"textPrimary"} size={18}>{props.title}</Typography>
</View>

<Typography size={18} type={"bold"} color={"green"}>{props.price}</Typography>

</View>
          
            </ThemeProvider >
    )
}

const styles = StyleSheet.create({

    selector:{
        flexDirection:"row",
        flex:1,
        alignItems:"center",
       justifyContent:"space-between",
        height:50,
        borderRadius:10,
        paddingRight:20,
        paddingLeft:15,
        marginBottom:24,
        backgroundColor:"#E0E0E0"
        
    },
    
})

BannerCard.defaultProps={
    onPress:null,
    
}

export default BannerCard