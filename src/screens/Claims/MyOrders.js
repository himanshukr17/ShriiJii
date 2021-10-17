import React, {memo} from 'react';
import {ThemeProvider} from 'react-native-elements';

import Background from '../../components/Background';
import Container from '../../components/Layout/container';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import Footer from '../../components/Layout/footer';
import {Icon,Divider} from 'react-native-elements';
import {Text, View, StyleSheet,Image,KeyboardAvoidingView,FlatList} from 'react-native';
import ClaimList from '../../components/List/ClaimList';
import AvatarWithMore from '../../components/List/AvatarWithMore';
import  Search from '../../components/CustomInputs/SearchField';
import Typography from '../../components/Typography/Typography';
import Nav from "../../components/Headers/header"


const showCustomer = (props) => (
     <Container>
    <Header >
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
        <View style={{ marginRight: 14 }}>
        <Icon
            onPress={()=> props.navigation.navigate("Wishlist")}
            name={"heart"}
            type={"ionicon"}
            color={"red"}
            size={25}
            style={{ marginRight: 14 }}
        />
            
        </View>
        <View>
        <Icon
            onPress={()=> props.navigation.navigate("Cart")}
            name={"cart-outline"}
            type={"ionicon"}
            color={"#ffb300"}
            size={25}
            style={{ marginLeft: 14 }}
        />
        </View>
    </View>
}
/>

    </Header>
    <Content>
    <View style={{marginTop:4}}>
           <Typography size={15} type={"italic"} style={{marginTop:15,marginBottom:4}}>MY ORDERS</Typography>
            <Divider style={{ backgroundColor: "#ffb300", height: 1.5,width:'35%',marginLeft:-3 }} />
            </View>
         <View style= {{marginTop:16,marginBottom:16}}>
         {/* <Search/> */}
         </View>
     
           <ClaimList
             bottomDivider
         name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
         date={"12 Jan 2021"}
         amount={"Delivered"}
         badgeText={"Approved"}
         badgeColor={"green"}
         avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
         />
       
          <ClaimList
          bottomDivider
          name={"NAME OF THE PRODUCT (WITH FULL DESCRIPTION IN TWO LINES AND THEN ELIPSIS)"}
          date={"12 Jan 2021"}
         amount={"Delivered"}
         badgeText={"Distributor"}
         badgeColor={"primary"}
         avatar_url={"https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_960_720.jpg"}
         />
       
       
    </Content>
    <Footer></Footer>
    </Container>
);

const styles = StyleSheet.create({
  header:{
lineHeight:40,
marginLeft:5,

  },
    addCust:{
lineHeight:40,
marginLeft:70
},

})
export default memo(showCustomer);