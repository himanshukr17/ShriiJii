import React, { memo,useState } from 'react';
import { ThemeProvider } from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../components/Typography/Typography';
import TextInput from '../../components/CustomInputs/PasswordField';
import BottomNav from "../../components/BottomNav/Main"
import IconButton from '../../components/CustomButtons/IconButton';
import { Icon } from 'react-native-elements';
import { theme } from "../../config/theme"
import Nav from "../../components/Headers/header"
import Banner from "../../components/Misc/BannerCard"
import Search from '../../components/CustomInputs/SearchField';
import AvatarList from '../../components/List/AvatarList';
import { Divider } from 'react-native-paper'

import { BlurView } from "@react-native-community/blur";
import PhoneNumberInput from '../../components/CustomInputs/PhoneInput';
import { BoxShadow } from 'react-native-shadow'
import Card from "../../components/Cards/ProductCardH"
const LoginScreen = (props) => {

const[state,setState]=useState("#a8a8a8")



    return(
    <Container>
        <Header  >
            <Nav

                leftComponent={
                    <Icon
                        onPress={() => props.navigation.toggleDrawer()}
                        name={"list"}
                        type={"feather"}
                        size={25}
                        style={{ marginLeft: 25, transform: [{ rotate: '-45deg' }] }}
                    />}

                rightComponent={
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{marginRight: 14 }}>
                        <Icon
                            onPress={()=> props.navigation.navigate("Wishlist")}
                            name={"heart"}
                            type={"ionicon"}
                            color={"red"}
                            size={25}
                            style={{ marginRight: 14 }}
                        />
                        </View>
                        <Icon
                            onPress={()=> props.navigation.navigate("Cart")}
                            name={"cart-outline"}
                            type={"ionicon"}
                            color={"#ffb300"}
                            size={25}
                            // style={{ marginRight: 25 }}
                        />
                    </View>
                }
            />

        </Header>
        <Content >
            <View style={{marginTop:30}}>
                <Search 
                place={"Search For Products"}
                />
            </View>
            <Typography size={15} type={"italic"} style={{marginTop:10,marginBottom:4}}>NEW ARRIVALS</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 2,width:'40%',marginLeft:-2 }} />
            <View style={{flexDirection:'row',marginLeft:-20}}>
                
            
            <AvatarList
              onPress={()=>props.navigation.navigate("Order")}
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         colour={state}
         avatar_url={"../../assets/images/apple.png"}
         onPress1={()=>setState(state=="#a8a8a8"?"#DC143C":"#a8a8a8")}
         />
         
       
       <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
         </View>
         <View style={{flexDirection:'row',marginLeft:-20}}>
            <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
       
       <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
         </View>
         <View style={{flexDirection:'row',marginLeft:-20}}>
            <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
       
       <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
         </View>
         <View style={{flexDirection:'row',marginLeft:-20}}>
            <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
       
       <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
         </View>
         {/* <Divider style={{ backgroundColor: "black", height: 1 }} /> */}
         <Typography size={15} type={"italic"} style={{marginTop:10,marginBottom:4}}>BEST SELLING</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 2,marginLeft:-2,width:'40%' }} />
            <View style={{flexDirection:'row',marginLeft:-20}}>
            <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
       
       <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
         </View>
         <View style={{flexDirection:'row',marginLeft:-20}}>
            <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
       
       <AvatarList
              
         name={"Name of the product [desc written here in maximum 2 lines]"}
         subtitle={"CATAGORY NAME"}
         subtitle1={"Rs.15000/-   "}
         subtitle2={"Rs.20000/-"}
         badgeText={"Farmer"}
         badgeColor={"green"}
         avatar_url={"../../assets/images/apple.png"}
         />
         </View>
         
        </Content>
        <Footer>

        </Footer>
    </Container>
)};

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: {
        lineHeight: 40,
        marginLeft: 10,

    }
    ,
    main: {
        flex: 1,
        justifyContent: 'space-between'
    },
    bottomButton: {
        width: "100%",
        paddingBottom: 20,
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 10,
        alignItems: "flex-end"
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    buttonCard: {

        flexDirection: "column",
        alignItems: "center"
    },
    recentProducts: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 45,
        marginLeft: 5
    },
    recent: {
        marginBottom: 10
    },
    banner: {
        marginTop: 16
    }

});

export default memo(LoginScreen);
