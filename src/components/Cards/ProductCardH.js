import React from "react";
import { Button ,ThemeProvider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import Image from "../../assets/images/eggs.png"
import Typography from "../Typography/Typography"
import IconButton from "../CustomButtons/IconButton"
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import {theme } from "../../config/theme"
const CustomButton = (props) => {

    let { 

sourceImage
    }=props

  return(


      <ThemeProvider theme={theme}>

<View style={styles.container}>


<View style={styles.section}>
<ImageBackground source={Image} resizeMode="contain" style={{width:"100%",height:"100%",resizeMode:"contain",marginTop:10}}>

</ImageBackground>
</View>

<View style={styles.section2}>
    <Typography bold size={14}>Egg Pasta</Typography>
    <Typography  type="light" size={10} color="textSecondary" >30gm , Price</Typography>


<View style={{position: 'absolute',right:10,bottom:10,width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<Typography  type="bold" size={14} style={{marginTop:0}} >$12.45</Typography>
<IconButton padding={8} />
</View>
</View>


</View>





   
  </ThemeProvider>



  )
};



const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    aspectRatio:0.7,

    flexDirection:"column",
    borderRadius: 18,
    borderColor:"#e2e2e2"
  },
  section:{
      flex:1,
     
  },
  section2:{
      flex:1,
      padding:10
  }
  });
  

CustomButton.defaultProps={
  sourceImage:null
}


export default CustomButton;
