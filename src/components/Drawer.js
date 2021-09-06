import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import Container from './Layout/container';
import Header from './Layout/header';
import Content from './Layout/content';
import Footer from './Layout/footer';
import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import {Text, View, StyleSheet,Image,KeyboardAvoidingView,FlatList} from 'react-native';
import StockList from './List/StockList';
import {theme} from "../config/theme"
import  Search from './CustomInputs/SearchField';
import Typography from './Typography/Typography';
import Nav from "./Headers/header"


const showCustomer = (props) => (
    <View style={{flex:1,marginTop:24}}>
    {/* <Nav style={{backgroundColor:"#fff"}}/> */}
    <DrawerContentScrollView {...props}>
 


  <View style={styles.AvatarView}>

  <Avatar
  rounded
  size={120}
  source={{
    uri:
      'https://www.clearmountainbank.com/wp-content/uploads/2020/04/male-placeholder-image.jpeg',
  }}
/>
<Typography size={16} type={"semiBold"} style={{marginTop:8}}>Himanshu Sharma</Typography>
  </View>
  
        {/* <DrawerItem
        style={{marginTop:32}}
        labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
            label="Home"
            onPress={() => {props.navigation.navigate("Home")}}
          /> */}
        <DrawerItem
       
        labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
            label="ProductDetail"
            onPress={() => {props.navigation.navigate("ProductDetail")}}
          />
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Profile"
           onPress={() => {props.navigation.navigate("Profile")}}
         />
         
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Login"
           onPress={() => {props.navigation.navigate("LoginScreen")}}
         />
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="My Orders"
           onPress={() => {props.navigation.navigate("My Orders")}}
         />
         <DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Order Detaill"
           onPress={() => {props.navigation.navigate("Show Order Detail")}}
         />
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Cart"
           onPress={() => {props.navigation.navigate("Cart")}}
         />
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Order"
           onPress={() => {props.navigation.navigate("Order")}}
         />
{/* <DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Customers"
           onPress={() => {props.navigation.navigate("showCustomer")}}
         />







<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="show Claims"
           onPress={() => {props.navigation.navigate("show Claims")}}
         />

<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Profile"
           onPress={() => {props.navigation.navigate("Profile")}}
         />


         
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Change Password"
           onPress={() => {props.navigation.navigate("Change Password")}}
         />


         
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Customer Details"
           onPress={() => {props.navigation.navigate("Customer Details")}}
         />

                  
<DrawerItem
       
       labelStyle={{fontSize:16 ,fontFamily:"Nunito",color:theme.colors.textPrimary}}
           label="Stocks"
           onPress={() => {props.navigation.navigate("Stocks")}}
         /> */}
        </DrawerContentScrollView>
       

        </View>
);

const styles = StyleSheet.create({
  header:{
lineHeight:40,
marginLeft:5,

  },

  AvatarView:{
flex:1,
width:"100%",
justifyContent:"center",
alignItems: "center",
marginBottom:20
  },
    addCust:{
lineHeight:40,
marginLeft:70
},

})
export default memo(showCustomer);