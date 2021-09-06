import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import Typography from "../../components/Typography/Typography";
import Accordian from "../../components/Collapse/Accordian"
import Slider from '../../components/Slider/AddProductSlider';
import NumberInput from "../../components/CustomInputs/NumberInput"

import Button from '../../components/CustomButtons/Button';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
export default  ProductView = () => {
  return (
    <Container>
      <Content style={{padding:0}}>

          <View style={styles.Slider}>

          <Slider/>
          </View>


<View style={styles.Body}>


          <View style={styles.Title}>
<Typography size={22} style={{lineHeight:24}}  type={"semiBold"}>Natural Red Apple</Typography>
<Typography size={14}  color={"textSecondary"} type={"medium"}>1kg, Price</Typography>
</View>
<View style={styles.inputNumber}
>
<NumberInput/>
<Typography size={18} style={{lineHeight:22}}  type={"semiBold"}>$ 456</Typography>
</View>
<View style={{marginTop:20}}>
<Accordian title={"Product Details"}>
<Typography color={"textSecondary"}>Ta daa!</Typography>
  </Accordian>

  <Accordian title={"Nutritions"}>
<Typography color={"textSecondary"}>Ta daa!</Typography>
  </Accordian>


  <Accordian title={"Review"}>
<Typography color={"textSecondary"}>Ta daa!</Typography>
  </Accordian>
</View>
</View>
      </Content>
      <Footer actionButton>
<Button title="Add To Basket" />
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({

    Slider:{},
    Body:{
      padding:15
    },
    accordianHeader:{
flex:1,
flexDirection:"row",
padding:12,
paddingLeft:0,
borderTopWidth:1,
borderTopColor:"#E2E2E2"
    },
    Title:{
        paddingTop:10,
     
    },
    collapseBody:{
      paddingBottom:10
    },
    inputNumber:{
      marginTop:20,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingRight:10,
    }
});
